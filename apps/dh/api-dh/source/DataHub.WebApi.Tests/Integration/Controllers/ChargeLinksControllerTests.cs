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

using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using AutoFixture;
using Energinet.Charges.Contracts.ChargeLink;
using Energinet.DataHub.Charges.Clients.ChargeLinks;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.DependencyInjection;
using Moq;
using Xunit;

namespace Energinet.DataHub.WebApi.Tests.Integration.Controllers
{
    public class ChargeLinksControllerTests : IClassFixture<WebApplicationFactory<Startup>>
    {
        private Fixture Fixture { get; }

        private Mock<IChargeLinksClient> ApiClientMock { get; }

        private HttpClient HttpClient { get; }

        public ChargeLinksControllerTests(WebApplicationFactory<Startup> factory)
        {
            Fixture = new Fixture();

            ApiClientMock = new Mock<IChargeLinksClient>();
            HttpClient = factory.WithWebHostBuilder(builder =>
            {
                builder.ConfigureServices(services =>
                {
                    services.AddTransient(_ => ApiClientMock.Object);
                });
            })
            .CreateClient();
        }

        [Fact]
        public async Task GetAsync_WhenMeteringPointIdHasChargeLinks_ReturnsOk()
        {
            // Arrange
            var meteringPointId = "571313180000000000";
            var requestUrl = $"/v1/ChargeLinks?meteringPointId={meteringPointId}";
            var list = new List<ChargeLinkDto>();
            var dto = Fixture.Create<ChargeLinkDto>();
            list.Add(dto);

            ApiClientMock
                .Setup(m => m.GetAsync(meteringPointId))
                .ReturnsAsync(list);

            // Act
            var actual = await HttpClient.GetAsync(requestUrl);

            // Assert
            actual.StatusCode.Should().Be(HttpStatusCode.OK);
        }

        [Fact]
        public async Task GetAsync_WhenMeteringPointIdHasNoChargeLink_ReturnsNotFound()
        {
            // Arrange
            var meteringPointId = "metering-point-has-no-links";
            var requestUrl = $"/v1/ChargeLinks?meteringPointId={meteringPointId}";
            var list = new List<ChargeLinkDto>();

            ApiClientMock
                .Setup(m => m.GetAsync(meteringPointId))
                .ReturnsAsync(list);

            // Act
            var actual = await HttpClient.GetAsync(requestUrl);

            // Arrange
            actual.StatusCode.Should().Be(HttpStatusCode.NotFound);
        }
    }
}
