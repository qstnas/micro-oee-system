import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlannerSheetPage } from './planner-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: PlannerSheetPage
  },
  {
    path: 'list-planner-sheet',
    loadChildren: () => import('./list-planner-sheet/list-planner-sheet.module').then( m => m.ListPlannerSheetPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlannerSheetPageRoutingModule {}
