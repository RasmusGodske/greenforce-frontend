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
import { NgModule, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { WattIconModule } from '@energinet-datahub/watt';

import { dhMeteringPointPath } from '../routing/dh-metering-point-path';

@Component({
  selector: 'dh-breadcrumb',
  templateUrl: './dh-breadcrumb.component.html',
  styleUrls: ['./dh-breadcrumb.component.scss'],
})
export class DhBreadcrumbComponent {
  meteringPointAbsolutePath = ['/', dhMeteringPointPath];

  @Input() meteringPointId = '';
}

@NgModule({
  declarations: [DhBreadcrumbComponent],
  exports: [DhBreadcrumbComponent],
  imports: [CommonModule, RouterModule, TranslocoModule, WattIconModule],
})
export class DhBreadcrumbScam {}
