import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPlannerSheetPage } from './list-planner-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: ListPlannerSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPlannerSheetPageRoutingModule {}
