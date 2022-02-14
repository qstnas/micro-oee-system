import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlannerSheetPageRoutingModule } from './planner-sheet-routing.module';

import { PlannerSheetPage } from './planner-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlannerSheetPageRoutingModule
  ],
  declarations: [PlannerSheetPage]
})
export class PlannerSheetPageModule {}
