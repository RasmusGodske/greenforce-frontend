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
import { ConnectionState } from '@energinet-datahub/dh/shared/data-access-api';
import { WattBadgeType } from '@energinet-datahub/watt';

/**
 *
 * @throws {Error} if the specified connection state has an unknown value.
 */
export function connectionStateToBadgeType(
  connectionState: ConnectionState
): WattBadgeType {
  switch (connectionState) {
    case ConnectionState.D02:
    case ConnectionState.E23:
      return 'warning';
    case ConnectionState.E22:
    case ConnectionState.D03:
      return 'success';
    default:
      throw new Error(`Unknown connection state: ${connectionState}`);
  }
}
