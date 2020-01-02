import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddgoodsPage } from './addgoods.page';

const routes: Routes = [
  {
    path: '',
    component: AddgoodsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddgoodsPageRoutingModule {}
