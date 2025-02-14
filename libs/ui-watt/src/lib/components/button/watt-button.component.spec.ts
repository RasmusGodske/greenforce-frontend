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
import { Type } from '@angular/core';
import { render } from '@testing-library/angular';

import { WattPrimaryButtonComponent } from './primary-button/watt-primary-button.component';
import { WattSecondaryButtonComponent } from './secondary-button/watt-secondary-button.component';
import { WattTextButtonComponent } from './text-button/watt-text-button.component';
import { WattButtonVariant } from './watt-button-variant';
import { WattButtonComponent } from './watt-button.component';
import { WattButtonModule } from './watt-button.module';

describe(WattButtonComponent.name, () => {
  test.each([
    ['text', WattTextButtonComponent],
    ['primary', WattPrimaryButtonComponent],
    ['secondary', WattSecondaryButtonComponent],
  ] as readonly [WattButtonVariant, Type<unknown>][])(
    'renders a %s button',
    async (buttonVariant, buttonComponentType) => {
      const view = await render(WattButtonComponent, {
        componentProperties: {
          variant: buttonVariant,
        },
        imports: [WattButtonModule],
      });

      const component = view.fixture.componentInstance;
      expect(component.buttonComponentVariant).toBe(buttonComponentType);
    }
  );

  test.each([undefined, null, ''])(
    '`defaults to a text button (variant="$bottomValue")',
    async (bottomValue) => {
      const view = await render(WattButtonComponent, {
        componentProperties: {
          // intentionally pass bottom values
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          variant: bottomValue as any,
        },
        imports: [WattButtonModule],
      });

      const component = view.fixture.componentInstance;
      expect(component.variant).toBe('text');
    }
  );
});
