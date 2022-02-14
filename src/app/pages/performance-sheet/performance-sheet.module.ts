import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerformanceSheetPageRoutingModule } from './performance-sheet-routing.module';

import { PerformanceSheetPage } from './performance-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerformanceSheetPageRoutingModule
  ],
  declarations: [PerformanceSheetPage]
})
export class PerformanceSheetPageModule {}