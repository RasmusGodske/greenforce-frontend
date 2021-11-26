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

using Energinet.DataHub.MeteringPoints.Client.Abstractions.Models;

namespace Energinet.DataHub.WebApi.GraphQL
{
    public class LocationDto
    {
        public LocationDto() { }

        public LocationDto(
            string? streetName = null,
            string? postCode = null,
            string? cityName = null,
            string? countryCode = null,
            string? streetCode = null,
            string? citySubDivisionName = null,
            string? floor = null,
            string? suite = null,
            string? buildingNumber = null,
            int? municipalityCode = null,
            bool? isActualAddress = null,
            string? geoInfoReference = null)
        {
            StreetName = streetName;
            PostCode = postCode;
            CityName = cityName;
            CountryCode = countryCode;
            StreetCode = streetCode;

            CitySubDivisionName = citySubDivisionName;
            Floor = floor;
            Suite = suite;
            BuildingNumber = buildingNumber;
            MunicipalityCode = municipalityCode;
            IsActualAddress = isActualAddress;
            GeoInfoReference = geoInfoReference;
        }

        public string? StreetName { get; }

        public string? PostCode { get; }

        public string? CityName { get; }

        public string? CountryCode { get; }

        public string? StreetCode { get; }

        public string? CitySubDivisionName { get; }

        public string? Floor { get; }

        public string? Suite { get; }

        public string? BuildingNumber { get; }

        public int? MunicipalityCode { get; }

        public bool? IsActualAddress { get; }

        public string? GeoInfoReference { get; }

        public static LocationDto From(MeteringPointDto dto)
        {
            return new(
                dto.StreetName,
                dto.PostCode,
                dto.CityName,
                dto.CountryCode,
                dto.StreetCode,
                dto.CitySubDivisionName,
                dto.Floor,
                dto.Suite,
                dto.BuildingNumber,
                dto.MunicipalityCode,
                dto.IsActualAddress,
                dto.GeoInfoReference?.ToString());
        }
    }
}
