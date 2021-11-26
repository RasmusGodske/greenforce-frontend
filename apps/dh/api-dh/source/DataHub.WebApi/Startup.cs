﻿// Copyright 2021 Energinet DataHub A/S
//
// Licensed under the Apache License, Version 2.0 (the "License2");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

using System;
using System.IO;
using System.Reflection;
using Energinet.DataHub.MeteringPoints.Client.Extensions;
using Energinet.DataHub.WebApi.GraphQL;
using GraphQL.MicrosoftDI;
using GraphQL.Server;
using GraphQL.Types;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace Energinet.DataHub.WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment environment)
        {
            Configuration = configuration;
            Environment = environment;
        }

        private IConfiguration Configuration { get; }

        private IWebHostEnvironment Environment { get; }

        /// <summary>
        /// This method gets called by the runtime. Use this method to add services to the container.
        /// </summary>
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            AddDomainClients(services);

            services.AddSingleton<ISchema, DataHubSchema>(serviceProvider => new DataHubSchema(new SelfActivatingServiceProvider(serviceProvider)));

            services
                .AddGraphQL(opt => opt.EnableMetrics = Environment.IsDevelopment())
                .AddSystemTextJson()
                .AddErrorInfoProvider(opt => opt.ExposeExceptionStackTrace = Environment.IsDevelopment());

            services.AddLogging(builder => builder.AddConsole());

            // Register the Swagger generator, defining 1 or more Swagger documents.
            services.AddSwaggerGen(config =>
            {
                config.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "DataHub BFF",
                    Version = "1.0.0",
                    Description = "Backend-for-frontend for DataHub",
                });

                config.SupportNonNullableReferenceTypes();

                // Set the comments path for the Swagger JSON and UI.
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                config.IncludeXmlComments(xmlPath);
            });

            if (Environment.IsDevelopment())
            {
                services.AddCors(options =>
                {
                    options.AddDefaultPolicy(builder => builder
                        .AllowAnyOrigin()
                        .AllowAnyHeader()
                        .AllowAnyMethod());
                });
            }
        }

        /// <summary>
        /// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// </summary>
        public void Configure(IApplicationBuilder app, IWebHostEnvironment environment)
        {
            if (environment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                // Enable middleware to serve generated Swagger as a JSON endpoint.
                app.UseSwagger();

                // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.)
                app.UseSwaggerUI(options =>
                    options.SwaggerEndpoint("/swagger/v1/swagger.json", "DataHub.WebApi v1"));

                // add GraphiQL UI to development only
                app.UseGraphQLGraphiQL();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseGraphQL<ISchema>();
        }

        private void AddDomainClients(IServiceCollection services)
        {
            var apiClientSettings = Configuration.GetSection("ApiClientSettings").Get<ApiClientSettings>();

            AddMeteringPointClient(services, apiClientSettings);
        }

        private static void AddMeteringPointClient(IServiceCollection services, ApiClientSettings? apiClientSettings)
        {
            Uri meteringPointBaseUrl = Uri.TryCreate(apiClientSettings?.MeteringPointBaseUrl, UriKind.Absolute, out var url)
                ? url
                : new Uri("https://empty");

            services.AddMeteringPointClient(meteringPointBaseUrl);
        }
    }
}
