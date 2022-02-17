import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./screens/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'planner-sheet',
    loadChildren: () => import('./pages/planner-sheet/planner-sheet.module').then( m => m.PlannerSheetPageModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('./pages/charts/charts.module').then( m => m.ChartsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'downtime-sheet',
    loadChildren: () => import('./pages/downtime-sheet/downtime-sheet.module').then( m => m.DowntimeSheetPageModule)
  },
  {
    path: 'quality-sheet',
    loadChildren: () => import('./pages/quality-sheet/quality-sheet.module').then( m => m.QualitySheetPageModule)
  },
  {
    path: 'operator-sheet',
    loadChildren: () => import('./pages/operator-sheet/operator-sheet.module').then( m => m.OperatorSheetPageModule)
  },
  {
    path: 'performance-sheet',
    loadChildren: () => import('./pages/performance-sheet/performance-sheet.module').then( m => m.PerformanceSheetPageModule)
  },
  {
    path: 'operator-dashboard',
    loadChildren: () => import('./home/operator-dashboard/operator-dashboard.module').then( m => m.OperatorDashboardPageModule)
  },
  {
    path: 'planner-dashboard',
    loadChildren: () => import('./home/planner-dashboard/planner-dashboard.module').then( m => m.PlannerDashboardPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}