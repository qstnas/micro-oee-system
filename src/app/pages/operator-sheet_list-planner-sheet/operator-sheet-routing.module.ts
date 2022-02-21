import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperatorSheetPage } from './operator-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: OperatorSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorSheetPageRoutingModule {}