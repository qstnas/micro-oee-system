import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperatorSheetPageRoutingModule } from './operator-sheet-routing.module';

import { OperatorSheetPage } from './operator-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperatorSheetPageRoutingModule
  ],
  declarations: [OperatorSheetPage]
})
export class OperatorSheetPageModule {}
