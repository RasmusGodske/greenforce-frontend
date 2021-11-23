import { Route } from '@angular/router';
import { childMeteringPointRoute } from '@energinet-datahub/dh/metering-point/feature-child-overview';

import { DhMeteringPointOverviewComponent } from '../dh-metering-point-overview.component';
import { dhMeteringPointIdParam } from './dh-metering-point-id-param';
import { DhMeteringPointOverviewGuard } from './dh-metering-point-overview.guard';

export const meteringPointRoute: Route = {
  path: `:${dhMeteringPointIdParam}`,
  canActivate: [DhMeteringPointOverviewGuard],
  children: [
    { path: '', component: DhMeteringPointOverviewComponent },
    childMeteringPointRoute,
  ],
};
