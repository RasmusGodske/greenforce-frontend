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
import { By } from '@angular/platform-browser';
import { render, RenderResult } from '@testing-library/angular';

import { WattShellComponent } from '@energinet-datahub/watt';

import { getTranslocoTestingModule } from '@energinet-datahub/dh/shared/test-util-i18n';

import {
  DhCoreShellComponent,
  DhCoreShellScam,
} from './dh-core-shell.component';
import { MsalServiceFake } from '@energinet-datahub/dh/shared/test-util-auth';

describe(DhCoreShellComponent.name, () => {
  beforeEach(async () => {
    view = await render(DhCoreShellComponent, {
      imports: [getTranslocoTestingModule(), DhCoreShellScam],
      providers: [MsalServiceFake],
    });
  });

  let view: RenderResult<DhCoreShellComponent>;

  it('displays the Watt shell', () => {
    const wattShell = view.fixture.debugElement.query(
      By.directive(WattShellComponent)
    );

    expect(wattShell.componentInstance).toBeInstanceOf(WattShellComponent);
  });
});
