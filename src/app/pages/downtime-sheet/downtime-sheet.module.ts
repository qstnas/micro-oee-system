import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DowntimeSheetPageRoutingModule } from './downtime-sheet-routing.module';

import { DowntimeSheetPage } from './downtime-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DowntimeSheetPageRoutingModule
  ],
  declarations: [DowntimeSheetPage]
})
export class DowntimeSheetPageModule {}
