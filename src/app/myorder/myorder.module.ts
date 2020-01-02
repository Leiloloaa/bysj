import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyorderPageRoutingModule } from './myorder-routing.module';

import { MyorderPage } from './myorder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyorderPageRoutingModule
  ],
  declarations: [MyorderPage]
})
export class MyorderPageModule {}
