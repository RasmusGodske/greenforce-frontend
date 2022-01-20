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
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { RouterStateSnapshot } from '@angular/router';
import {
  PopupRequest,
  RedirectRequest,
  InteractionType,
} from '@azure/msal-browser';
import { MsalService } from './msal.service';

export declare type MsalGuardAuthRequest =
  | Partial<PopupRequest>
  | Partial<Omit<RedirectRequest, 'redirectStartPage'>>;

export type MsalGuardConfiguration = {
  interactionType: InteractionType.Popup | InteractionType.Redirect;
  authRequest?:
    | MsalGuardAuthRequest
    | ((
        authService: MsalService,
        state: RouterStateSnapshot
      ) => MsalGuardAuthRequest);
  loginFailedRoute?: string;
};
