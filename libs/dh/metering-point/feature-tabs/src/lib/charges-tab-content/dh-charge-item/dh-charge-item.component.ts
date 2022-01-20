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
import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ChargeLinkDto,
  ChargeType,
} from '@energinet-datahub/dh/shared/data-access-api';
import { TranslocoModule } from '@ngneat/transloco';
import {
  WattEmptyStateModule,
  WattIconModule,
  WattIconSize,
} from '@energinet-datahub/watt';
import { MatTableModule } from '@angular/material/table';
import { DhSharedUiDateTimeModule } from '@energinet-datahub/dh/shared/ui-date-time';

@Component({
  selector: 'dh-charge-item',
  templateUrl: './dh-charge-item.component.html',
  styleUrls: ['./dh-charge-item.component.scss'],
})
export class DhChargeItemComponent {
  @Input() charges: Array<ChargeLinkDto> = [];
  @Input() title = '';
  chargeTypes = ChargeType;
  iconSize = WattIconSize;
}

@NgModule({
  imports: [
    TranslocoModule,
    CommonModule,
    WattEmptyStateModule,
    MatTableModule,
    DhSharedUiDateTimeModule,
    WattIconModule,
  ],
  declarations: [DhChargeItemComponent],
  exports: [DhChargeItemComponent],
})
export class DhChargeItemScam {}
