import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlannerDashboardPage } from './planner-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: PlannerDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlannerDashboardPageRoutingModule {}
