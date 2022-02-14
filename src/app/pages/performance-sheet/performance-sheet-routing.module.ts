import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerformanceSheetPage } from './performance-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: PerformanceSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerformanceSheetPageRoutingModule {}