# GreenForce

Monorepo that hosts:

- Frontend apps
- Backend-for-frontends (BFFs)
- Watt Design System
- CI/CD pipelines
- Infrastructure

## Getting started

[Read more here](docs/getting-started.md)

## Folder Structure

The folder structure of the repository is based on [Nrwl](https://nrwl.io/) [NX](https://nx.dev/angular) mono-repository project.

```|
Energinet-DataHub/greenforce-frontend
├── apps                    # Contains source code for applications. This includes frontends, BFF and E2E. Apps are grouped by a product root folder, and type prefixed sub-folder(s).
|  ├── dh                   # DataHub application (product)
|  |  ├── api-dh            # - BFF for DataHub
|  |  ├── app-dh            # - Frontend for DataHub
|  |  └── e2e-dh            # - E2E tests for DataHub
|  └── ett                  # EnergyOrigin (product)
|     ├── app-ett           # - Frontend for EnergyOrigin
|     └── e2e-ett           # - E2E tests for EnergyOrigin
├── build                   # Contains infrastructure for DataHub and the design system
├── dist                    # Contains output files when building artifacts (for distribution)
|  ├── apps                 #
|  └── libs                 #
├── docs                    # Contains general documentation
├── infrastructure          # Contains infrastructure for EnergyOrigin
├── libs                    # Contains source code for libraries. See "Folder Structure - library" section for more information
└── tools                   # Contains various tools
   ├── executors            # - Executors perform actions on your code. This can include building, linting, testing, serving.
   └── generators           # - Generators provide a way to automate tasks you regularly perform as part of your development workflow. This can include: scafolding
```

### Folder Structure - library

```|
...
└── libs                                     # Contains source code for libraries
   └── <product>                             # All libraries are grouped by a product root folder
      └── <domain>                           # A product can contain serveral domains ex. auth, core, etc.
         └── <library type>-<library name>   # A domain can contain serveral libraries which are prefixed by type
   └── ui-watt                               # See "Watt Design System" section
```

## App Types

- api (BFF)
- app (Frontend)
- e2e

### API apps (BFFs)

An API app contains the BFF of a product. API apps are located under `apps/<product>` and are prefixed with `api-<product>`.

### Frontend Apps

A Frontend app contains the frontend application of a product. Frontend apps are located under `apps/<product>` and are prefixed with `app-<product>`.
Allowed dependencies: `shell`, `environments`, `assets`, `styles` libraries.

### E2E apps

An E2E app contains the e2e application of a product. E2E apps are located under `apps/<product>` and are prefixed with `e2e-<product>`
Allowed dependencies: `e2e-util` libraries and always an implicit dependency on an app, and an API (BFF).

## Library Types

All libraries are related to a product or shared across multiple products. The libraries are located under `libs/<product>` and are prefixed with `<library type>-<library name>`.
For shared libraries `gf` should be used as `product`.

Only libraries of type `data-access` may have dependencies to apps, and only apps of type `api`. Depending on the type of a library, a library can have dependencies to other types of libraries:

- feature
- ui
- data-access
- open-api
- routing
- util
- test-util
- e2e-util
- domain
- shell
- configuration
- environments
- assets
- styles

### Feature libraries

Developers should consider feature libraries as libraries that implement smart UI (with access to data sources) for specific business use cases or pages in an application.
Allowed dependencies to: `feature`, `ui`, `data-access`, `routing`, `util`, `test-util`, `domain`, `environments`, `assets`.

### UI libraries

A UI library contains only presentational logic (presentational components, pipes, presentational services, directives).
Allowed dependencies to: `ui`, `open-api`, `util`, `test-util`, `domain`, `assets`, `styles`.

### Data-access libraries

A data-access library contains code for interacting with a back-end system. It also includes all the code related to state management, routing and HTTP interceptors.
Allowed dependencies to: `data-access`, `routing`, `util`, `test-util`, `domain`, `environments`.

### Open API libraries

An open-api library is a data-acces library that contains code for interacting with a back-end system. However, it also contains DTOs/models that are auto-generated using OpenAPI Generator.
Allowed dependencies to: `environments`, `test-util`.

### Routing libraries

A routing library contains code related for routing (routes, route paths, route guards, route resolvers, route reuse strategies, preloading strategies).
Allowed dependencies to: `data-access`, `routing`, `util`, `test-util`, `shell`, `domain`.

### Utility libraries

A utility library contains low-level utilities used by many libraries and applications (services, pure functions, contants).
Allowed dependencies to: `util`, `test-util`.

### Test-util libraries

Stubs, jest matchers, testing modules, test library configuration
Allowed dependencies to: `data-access`, `util`, `test-util`, `domain`, `configuration`, `assets`.

### E2E-util libraries

Cypress commands or fixtures
Allowed dependencies to: `util`, `test-util`, `e2e-util`.

### Domain libraries

Interfaces, types, constants, functions and services related to domain objects.
Allowed dependencies to: `domain`, `util`, `test-util`.

### Shell libraries

Entrypoint for an application or domain. Orchestration and routing.
Allowed dependencies to: `feature`, `ui`, `data-access`, `routing`, `util`, `test-util`, `shell`, `configuration`, `environments`, `assets`, `styles`.

### Configuration libraries

A library containing configuration and setup of libraries and conerns, for example i18n
Allowed dependencies to: `data-access`, `routing`, `util`, `test-util`, `configuration`, `environments`, `domain`.

### Environments libraries

Angular environment files.
Allowed dependencies to: `util`, `test-util`, `environments`, `assets`.

### Assets libraries

Icons, images, fonts, etc.
Allowed dependencies to: `assets`.

### Styles libraries

SCSS functions, mixins, variables, partials, and global stylesheets.
Allowed dependencies to: `assets`, `styles`.

## Frontend apps

The frontend apps are built with Angular in an Nx Workspace. They are located under `apps` folder:

- `dh/app-dh` - "DataHub" app
- `dh/e2e-dh` - End-to-end tests for `app-dh`
- `ett/app-ett` - "EnergyOrigin" app.
- `ett/e2e-ett` - End-to-end tests for `app-ett`

Besides the `apps` folder, there's also a `libs` folder that contains features used by the apps. This is where most of the code lives.

### Frontend configuration files

#### DataHub frontend

Configuration files are located in the `assets/configuration` folder. Local configurations have a `.local` filename suffix but is overridable by a configuration file without a prefix. For example, `dh-api-environment.local.json` configures the DataHub frontend to use a local DataHub API. To use a remote DataHub API, place a `dh-api-environment.json` file in the same folder
and set the remote address in the relevant property.

## Backend-for-frontend (BFF)

There's currenly only one BFF located in `api-dh` under `apps/dh`. It is for `app-dh` and is using .NET 5.0. See [Development notes](./apps/dh/api-dh/documents/development.md). When developing `app-dh`, run `nx serve api-dh` to start
the BFF. This is required for both local development and tests.

## Watt Design System

"Watt" is a Design System that is used by all frontend apps. It is located in `ui-watt` under `libs`.

## CI/CD pipelines

Located under `.github/workflows`. There are:

- `api-dh-ci.yml` - Used by the BFF for `app-dh`.
- `ett.yml` - Used by "EnergyOrigin" app
- `license-check-ci.yml` - Used for adding license to files
- `frontend-ci.yml` - Used to build, test, format and lint all frontend apps

We use bots for certain trivial tasks such as adding license headers to files, formatting code, fixing lint errors, and generating API clients based on OpenAPI. For this to work, bots have to use the repository secret `ACTIONS_BOT_SSH_KEY`
when checking out and pushing changes or creating releases that trigger a workflow. Only do this for idempotent tasks to
prevent circular workflows from causing inifinite workflow runs.

The `ACTIONS_BOT_SSH_KEY` repository secret is registered as a deploy key. The following guides are used to manage this
SSH key:

- [Deploy keys](https://docs.github.com/en/developers/overview/managing-deploy-keys#deploy-keys)
- [Generating a new SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key)
