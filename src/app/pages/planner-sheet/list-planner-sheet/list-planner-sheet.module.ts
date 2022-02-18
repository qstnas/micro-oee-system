import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPlannerSheetPageRoutingModule } from './list-planner-sheet-routing.module';

import { ListPlannerSheetPage } from './list-planner-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPlannerSheetPageRoutingModule
  ],
  declarations: [ListPlannerSheetPage]
})
export class ListPlannerSheetPageModule {}
