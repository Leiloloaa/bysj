import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatapsdPageRoutingModule } from './updatapsd-routing.module';

import { UpdatapsdPage } from './updatapsd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatapsdPageRoutingModule
  ],
  declarations: [UpdatapsdPage]
})
export class UpdatapsdPageModule {}
