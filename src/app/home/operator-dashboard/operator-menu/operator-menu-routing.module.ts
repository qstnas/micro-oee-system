import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperatorMenuPage } from './operator-menu.page';

const routes: Routes = [
  {
    path: '',
    component: OperatorMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorMenuPageRoutingModule {}
