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
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  dhApiEnvironmentToken,
  dhB2CEnvironmentToken,
  environment,
} from '@energinet-datahub/dh/shared/environments';

import { DataHubAppModule } from './app/datahub-app.module';
import { loadDhApiEnvironment } from './configuration/load-dh-api-environment';
import { loadDhB2CEnvironment } from './configuration/load-dh-b2c-environment';

if (environment.production) {
  enableProdMode();
}

Promise.all([loadDhApiEnvironment(), loadDhB2CEnvironment()])
  .then(([dhApiEnvironment, dhB2CEnvironment]) => {
    platformBrowserDynamic([
      { provide: dhApiEnvironmentToken, useValue: dhApiEnvironment },
      { provide: dhB2CEnvironmentToken, useValue: dhB2CEnvironment },
    ]).bootstrapModule(DataHubAppModule);
  })
  .catch((error: unknown) => console.error(error));
