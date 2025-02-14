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
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WattButtonModule } from './../../button/watt-button.module';
import { WattFormFieldModule } from '../../form-field/form-field.module';
import { WattInputModule } from '../input.module';

import { StorybookInputWrapperComponent } from './storybook-input-wrapper.component';
import { StorybookInputOverviewComponent } from './storybook-input-overview.component';
import { WattTextButtonComponent } from '../../button/text-button/watt-text-button.component';
import { WattIconModule } from './../../../foundations/icon';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    WattFormFieldModule,
    WattIconModule,
    WattInputModule,
    WattButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    StorybookInputWrapperComponent,
    StorybookInputOverviewComponent,
  ],
  exports: [
    WattFormFieldModule,
    WattInputModule,
    ReactiveFormsModule,
    StorybookInputWrapperComponent,
    StorybookInputOverviewComponent,
  ],
  entryComponents: [WattTextButtonComponent],
})
export class StorybookInputModule {}
