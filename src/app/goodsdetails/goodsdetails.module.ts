import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoodsdetailsPageRoutingModule } from './goodsdetails-routing.module';

import { GoodsdetailsPage } from './goodsdetails.page';

import { CommentsModule } from '../module/comments/comments.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoodsdetailsPageRoutingModule,
    CommentsModule
  ],
  declarations: [GoodsdetailsPage]
})
export class GoodsdetailsPageModule {}
