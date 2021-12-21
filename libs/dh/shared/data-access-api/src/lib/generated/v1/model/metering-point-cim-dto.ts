/**
 * DataHub BFF
 * Backend-for-frontend for DataHub
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SettlementMethod } from './settlement-method';
import { AssetType } from './asset-type';
import { ReadingOccurrence } from './reading-occurrence';
import { ConnectionType } from './connection-type';
import { MeteringPointSimpleCimDto } from './metering-point-simple-cim-dto';
import { NetSettlementGroup } from './net-settlement-group';
import { MeteringPointType } from './metering-point-type';
import { ProductId } from './product-id';
import { ConnectionState } from './connection-state';
import { Unit } from './unit';
import { MeteringMethod } from './metering-method';
import { DisconnectionType } from './disconnection-type';


export interface MeteringPointCimDto { 
    meteringPointId?: string;
    gsrnNumber?: string;
    streetName?: string;
    postalCode?: string;
    cityName?: string;
    countryCode?: string;
    connectionState?: ConnectionState;
    meteringMethod?: MeteringMethod;
    readingOccurrence?: ReadingOccurrence;
    meteringPointType?: MeteringPointType;
    ratedCapacity?: number | null;
    ratedCurrent?: number | null;
    gridAreaName?: string;
    gridAreaCode?: string;
    linkedExtendedMasterdata?: string;
    locationDescription?: string;
    productId?: ProductId;
    unit?: Unit;
    effectiveDate?: string | null;
    meterId?: string;
    streetCode?: string;
    citySubDivisionName?: string;
    floorIdentification?: string;
    suiteNumber?: string;
    buildingNumber?: string;
    municipalityCode?: number | null;
    isActualAddress?: boolean | null;
    darReference?: string | null;
    capacity?: number | null;
    assetType?: AssetType;
    settlementMethod?: SettlementMethod;
    inAreaCode?: string | null;
    outAreaCode?: string | null;
    netSettlementGroup?: NetSettlementGroup;
    supplyStart?: string | null;
    connectionType?: ConnectionType;
    disconnectionType?: DisconnectionType;
    productionObligation?: boolean | null;
    childMeteringPoints?: Array<MeteringPointSimpleCimDto> | null;
    parentMeteringPoint?: MeteringPointSimpleCimDto;
    powerPlantGsrnNumber?: string;
}


