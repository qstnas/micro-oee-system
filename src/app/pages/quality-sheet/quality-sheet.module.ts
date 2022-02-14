import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QualitySheetPageRoutingModule } from './quality-sheet-routing.module';

import { QualitySheetPage } from './quality-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QualitySheetPageRoutingModule
  ],
  declarations: [QualitySheetPage]
})
export class QualitySheetPageModule {}
