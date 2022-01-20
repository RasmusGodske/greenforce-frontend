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
import { Component, NgModule, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LetModule } from '@rx-angular/template';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { TranslocoModule } from '@ngneat/transloco';

import { DhChargesDataAccessApiStore } from '@energinet-datahub/dh/charges/data-access-api';
import { ChargeLinkDto } from '@energinet-datahub/dh/shared/data-access-api';
import { dhMeteringPointIdParam } from '@energinet-datahub/dh/metering-point/routing';
import { WattSpinnerModule } from '@energinet-datahub/watt';

import { DhChargeItemScam } from './dh-charge-item/dh-charge-item.component';
import { DhChargesNotFoundScam } from './dh-charges-not-found/dh-charges-not-found.component';
import { DhChargesGeneralErrorScam } from './dh-charges-general-error/dh-charges-general-error.component';

@Component({
  selector: 'dh-charges-tab-content',
  templateUrl: './dh-charges-tab-content.component.html',
  styleUrls: ['./dh-charges-tab-content.component.scss'],
  providers: [DhChargesDataAccessApiStore],
})
export class DhChargesTabContentComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  meteringPointId$ = this.route.params.pipe(
    map((params) => params[dhMeteringPointIdParam] as string)
  );

  constructor(
    private route: ActivatedRoute,
    private store: DhChargesDataAccessApiStore
  ) {
    this.loadChargesData();
  }

  tariffs$: Observable<Array<ChargeLinkDto>> = this.store.tariffs$;
  subscriptions$: Observable<Array<ChargeLinkDto>> = this.store.subscriptions$;
  fees$: Observable<Array<ChargeLinkDto>> = this.store.fees$;
  isLoading$ = this.store.isLoading$;
  chargesNotFound$ = this.store.chargesNotFound$;
  hasGeneralError$ = this.store.hasGeneralError$;

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  loadChargesData(): void {
    this.meteringPointId$
      .pipe(
        takeUntil(this.destroy$),
        map((meteringPointId) => this.store.loadChargesData(meteringPointId))
      )
      .subscribe();
  }
}

@NgModule({
  declarations: [DhChargesTabContentComponent],
  imports: [
    CommonModule,
    WattSpinnerModule,
    LetModule,
    TranslocoModule,
    DhChargeItemScam,
    DhChargesNotFoundScam,
    DhChargesGeneralErrorScam,
  ],
  exports: [DhChargesTabContentComponent],
})
export class DhChargesTabContentScam {}
