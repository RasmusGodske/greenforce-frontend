// Copyright 2020 Energinet DataHub A/S
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
using AutoFixture;
using Energinet.DataHub.MeteringPoints.Client.Abstractions;
using GraphQL;
using GraphQL.Types;
using Microsoft.Extensions.DependencyInjection;

namespace Energinet.DataHub.WebApi.GraphQL
{
    public class DataHubQuery : ObjectGraphType
    {
        public DataHubQuery()
        {
            Name = "DataHubQuery";
            Description = "DataHub market data query interface";

            FieldAsync<MeteringPointType>(
                "meteringpoint",
                arguments: new(
                    new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "gsrn", Description = "gsrn number of the metering point" }),
                resolve: async context =>
                {
                    var client = context.RequestServices?.GetRequiredService<IMeteringPointClient>();
                    var gsrn = context.GetArgument<string>("gsrn");

                    if (client == null) throw new InvalidOperationException($"Client is null - please register {nameof(IMeteringPointClient)}");
                    if (string.IsNullOrEmpty(gsrn)) throw new ArgumentException("no gsrn number provided");

                    return await client
                        .GetMeteringPointByGsrnAsync(gsrn)
                        .ConfigureAwait(false);
                });

            Field<ListGraphType<AccountingPointType>>(
                "accountingpoints",
                resolve: ctx =>
                {
                    var fixture = new Fixture();
                    return fixture.CreateMany<AccountingPointDto>();
                });
        }
    }
}
