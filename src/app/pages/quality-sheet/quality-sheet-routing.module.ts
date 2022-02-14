import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QualitySheetPage } from './quality-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: QualitySheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QualitySheetPageRoutingModule {}