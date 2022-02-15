import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlannerDashboardPageRoutingModule } from './planner-dashboard-routing.module';

import { PlannerDashboardPage } from './planner-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlannerDashboardPageRoutingModule
  ],
  declarations: [PlannerDashboardPage]
})
export class PlannerDashboardPageModule {}
