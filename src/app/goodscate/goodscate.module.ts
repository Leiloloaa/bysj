import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoodscatePageRoutingModule } from './goodscate-routing.module';

import { GoodscatePage } from './goodscate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoodscatePageRoutingModule
  ],
  declarations: [GoodscatePage]
})
export class GoodscatePageModule {}
