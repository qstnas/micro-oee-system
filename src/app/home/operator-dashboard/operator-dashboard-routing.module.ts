import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperatorDashboardPage } from './operator-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: OperatorDashboardPage
  },
  {
    path: 'operator-menu',
    loadChildren: () => import('./operator-menu/operator-menu.module').then( m => m.OperatorMenuPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorDashboardPageRoutingModule {}
