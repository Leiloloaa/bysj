import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodsdetailsPage } from './goodsdetails.page';

const routes: Routes = [
  {
    path: '',
    component: GoodsdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoodsdetailsPageRoutingModule {}
