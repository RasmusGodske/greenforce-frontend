/**
 * @license
 * Copyright 2021 Energinet DataHub A/S
 *
 * Licensed under the Apache License, Version 2.0 (the "License2");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { MeteringPointType } from '@energinet-datahub/dh/shared/data-access-api';

export const allMeteringPointTypes = 'allMeteringPointTypes';

export type MeteringPointTypeMapProperty = keyof typeof meteringPointTypeMap;

export const meteringPointTypeMap = {
  meteringPointId: [allMeteringPointTypes],
  settlementMethod: [MeteringPointType.E17],
  physicalStatusOfMeteringPoint: [allMeteringPointTypes],
  typeOfMeteringPoint: [allMeteringPointTypes],
  subTypeOfMeteringPoint: [allMeteringPointTypes],
  meterReadingOccurence: [allMeteringPointTypes],
  netSettlementGroup: [MeteringPointType.E17, MeteringPointType.E18],
  supplyStart: [MeteringPointType.E17, MeteringPointType.E18],
  ratedCurrent: [allMeteringPointTypes],
  ratedCapacity: [allMeteringPointTypes],
  meteringGridArea: [allMeteringPointTypes],
  inAreaCode: [MeteringPointType.E20],
  outAreaCode: [MeteringPointType.E20],
  productionObligation: [MeteringPointType.E18],
  powerPlantGsrnNumber: [
    MeteringPointType.E17,
    MeteringPointType.E18,
    MeteringPointType.D01,
    MeteringPointType.D04,
    MeteringPointType.D05,
    MeteringPointType.D06,
    MeteringPointType.D07,
    MeteringPointType.D08,
    MeteringPointType.D09,
    MeteringPointType.D10,
    MeteringPointType.D11,
    MeteringPointType.D12,
    MeteringPointType.D17,
    MeteringPointType.D18,
  ],
  locationDescription: [allMeteringPointTypes],
  electricitySupplier: [MeteringPointType.E17, MeteringPointType.E18],
  productType: [allMeteringPointTypes],
  unitType: [allMeteringPointTypes],
  disconnectionType: [MeteringPointType.E17, MeteringPointType.E18],
  connectionType: [MeteringPointType.E17, MeteringPointType.E18],
  capacity: [
    MeteringPointType.E17,
    MeteringPointType.E18,
    MeteringPointType.D01,
    MeteringPointType.D04,
    MeteringPointType.D05,
    MeteringPointType.D06,
    MeteringPointType.D07,
    MeteringPointType.D08,
    MeteringPointType.D09,
    MeteringPointType.D10,
    MeteringPointType.D11,
    MeteringPointType.D12,
    MeteringPointType.D17,
    MeteringPointType.D18,
  ],
  assetType: [
    MeteringPointType.E17,
    MeteringPointType.E18,
    MeteringPointType.D01,
    MeteringPointType.D04,
    MeteringPointType.D05,
    MeteringPointType.D06,
    MeteringPointType.D07,
    MeteringPointType.D08,
    MeteringPointType.D09,
    MeteringPointType.D10,
    MeteringPointType.D11,
    MeteringPointType.D12,
    MeteringPointType.D17,
    MeteringPointType.D18,
  ],
  effectiveDate: [allMeteringPointTypes],
  streetName: [allMeteringPointTypes],
  streetCode: [allMeteringPointTypes],
  buildingNumber: [allMeteringPointTypes],
  floorId: [allMeteringPointTypes],
  roomId: [allMeteringPointTypes],
  citySubDivName: [allMeteringPointTypes],
  postCode: [allMeteringPointTypes],
  cityName: [allMeteringPointTypes],
  municipalityCode: [allMeteringPointTypes],
  countryCode: [allMeteringPointTypes],
  mPAddressWashInstruction: [
    MeteringPointType.E17,
    MeteringPointType.E18,
    MeteringPointType.E20,
  ],
  darReference: [allMeteringPointTypes],
  meterIdentification: [
    MeteringPointType.E17,
    MeteringPointType.E18,
    MeteringPointType.E20,
    MeteringPointType.D01,
    MeteringPointType.D02,
    MeteringPointType.D04,
    MeteringPointType.D05,
    MeteringPointType.D06,
    MeteringPointType.D07,
    MeteringPointType.D08,
    MeteringPointType.D09,
    MeteringPointType.D10,
    MeteringPointType.D11,
    MeteringPointType.D12,
    MeteringPointType.D17,
    MeteringPointType.D18,
    MeteringPointType.D20,
  ],
  originalBusinessDocument: [allMeteringPointTypes],
  childMeteringPoint: [
    MeteringPointType.E17,
    MeteringPointType.E18,
    MeteringPointType.E20,
  ],
  parentMeteringPoint: [
    MeteringPointType.D01,
    MeteringPointType.D02,
    MeteringPointType.D04,
    MeteringPointType.D05,
    MeteringPointType.D06,
    MeteringPointType.D07,
    MeteringPointType.D08,
    MeteringPointType.D09,
    MeteringPointType.D10,
    MeteringPointType.D11,
    MeteringPointType.D12,
    MeteringPointType.D14,
    MeteringPointType.D15,
    MeteringPointType.D17,
    MeteringPointType.D18,
    MeteringPointType.D20,
    MeteringPointType.D99,
  ],
};
