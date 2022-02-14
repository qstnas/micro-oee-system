import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlannerSheetPage } from './planner-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: PlannerSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlannerSheetPageRoutingModule {}
