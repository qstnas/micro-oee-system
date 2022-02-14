import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DowntimeSheetPage } from './downtime-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: DowntimeSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DowntimeSheetPageRoutingModule {}
