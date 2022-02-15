import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'operator',
    loadChildren: () => import('./operator/operator.module').then( m => m.OperatorPageModule)
  },
  {
    path: 'operator-dashboard',
    loadChildren: () => import('./operator-dashboard/operator-dashboard.module').then( m => m.OperatorDashboardPageModule)
  },
  {
    path: 'planner-dashboard',
    loadChildren: () => import('./planner-dashboard/planner-dashboard.module').then( m => m.PlannerDashboardPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
