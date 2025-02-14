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
function mixinSnippet(name: string) {
  return `@use '@energinet-datahub/watt/utils' as watt
@include watt.typography-watt-${name}
  `;
}

export const typographyHtmlSnippets = {
  h1: {
    tag: '<h1>Headline 1</h1>',
    class: '<p class="watt-headline-1">Headline 1</p>',
    mixin: mixinSnippet('headline-1'),
  },
  h2: {
    tag: '<h2>Headline 2</h2>',
    class: '<p class="watt-headline-2">Headline 2</p>',
    mixin: mixinSnippet('headline-2'),
  },
  h3: {
    tag: '<h3>Headline 3</h3>',
    class: '<p class="watt-headline-3">Headline 3</p>',
    mixin: mixinSnippet('headline-3'),
  },
  h4: {
    tag: '<h4>Headline 4</h4>',
    class: '<p class="watt-headline-4">Headline 4</p>',
    mixin: mixinSnippet('headline-4'),
  },
  h5: {
    tag: '<h5>Headline 5</h5>',
    class: '<p class="watt-headline-5">Headline 5</p>',
    mixin: mixinSnippet('headline-5'),
  },
  textL: {
    class: '<p class="watt-text-l">Lead (text-l)</p>',
    mixin: mixinSnippet('text-l'),
  },
  bodyTextM: {
    tag: '<p>Body (text-m)</p>',
    class: '<div class="watt-text-m">Body (text-m)</div>',
    mixin: mixinSnippet('text-m'),
  },
  textS: {
    tag: '<p><small>Body (text-s)</small></p>',
    mixin: mixinSnippet('text-s'),
  },
  textXs: {
    class: '<p class="watt-text-xs">Extra small (text-xs)</p>',
    mixin: mixinSnippet('text-xs'),
  },
  button: {
    storybook: '<p class="watt-button">Button</p>',
    tag: '<button type="button">Button</button>',
    class: '<a class="watt-button" href="#">Button</a>',
    mixin: mixinSnippet('button'),
  },
  label: {
    tag: '<label>Label</label>',
    class: '<p class="watt-label">Label</p>',
    mixin: mixinSnippet('watt-label'),
  },
};
