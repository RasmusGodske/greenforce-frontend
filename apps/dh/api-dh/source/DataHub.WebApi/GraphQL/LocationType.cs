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

using GraphQL.Types;

namespace Energinet.DataHub.WebApi.GraphQL
{
    public sealed class LocationType : ObjectGraphType<LocationDto>
    {
        public LocationType()
        {
            Field(h => h.StreetName, true).Description("Street name for location");
            Field(h => h.PostCode, true).Description("Postal code for location");
            Field(h => h.CityName, true).Description("City name of the location");
            Field(h => h.CountryCode, true).Description("Country code for the location");
            Field(h => h.StreetCode, true).Description("Street code for the location");
            Field(h => h.CitySubDivisionName, true).Description("Name of suburb");
            Field(h => h.Floor, true).Description("Floor number in the building");
            Field(h => h.Suite, true).Description("Suite / apartment in the building");
            Field(h => h.BuildingNumber, true).Description("Building number seen from the street");
            Field(h => h.MunicipalityCode, true).Description("Municipality code");
            Field(h => h.IsActualAddress, true).Description("true - if the field is the actual address");
            Field(h => h.GeoInfoReference, true).Description("Global geo reference identification");
        }
    }
}
