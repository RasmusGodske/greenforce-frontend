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
import { Component, NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { WattPrimaryButtonComponent } from './primary-button/watt-primary-button.component';

import { WattButtonModule } from './watt-button.module';

describe(WattButtonModule.name, () => {
  function setup(template: string) {
    @Component({
      template,
    })
    class TestHostComponent {}

    @NgModule({
      imports: [WattButtonModule],
      declarations: [TestHostComponent],
      // https://github.com/thymikee/jest-preset-angular/issues/83
      providers: [{ provide: MATERIAL_SANITY_CHECKS, useValue: false }],
      entryComponents: [WattPrimaryButtonComponent],
      exports: [WattButtonModule],
    })
    class TestingModule {}

    TestBed.configureTestingModule({
      imports: [TestingModule],
    });

    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    return {
      fixture,
    };
  }

  it('exports shared Watt Design System buttons', () => {
    const text = 'Primary button';
    const template = `
      <watt-button type="primary">
        ${text}
      </watt-button>
    `;
    const { fixture } = setup(template);

    expect(fixture.nativeElement.textContent).toContain(text);
  });
});
