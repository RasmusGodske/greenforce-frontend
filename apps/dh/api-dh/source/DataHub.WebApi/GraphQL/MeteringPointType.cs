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
using Energinet.DataHub.MeteringPoints.Client.Abstractions.Models;
using GraphQL.Types;

namespace Energinet.DataHub.WebApi.GraphQL
{
    public class MeteringPointType : ObjectGraphType<MeteringPointDto>
    {
        public MeteringPointType()
        {
            Name = "MeteringPoint";

            Field("Id", h => h.MeteringPointId).Description("MeteringPoint entity identification");
            Field(h => h.GsrnNumber).Description("GSRN number that identifies the metering point");
            Field<LocationType>("location", resolve: ctx =>
            {
                if (ctx.Source == null) throw new InvalidOperationException("source is null");
                return LocationDto.From(ctx.Source);
            });
            // Field(
            //     name: "InstallationAddress",
            //     description: "Physical installation address",
            //     type: typeof(LocationType),
            //     resolve: context => new LocationDto());
        }
    }
}
