import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodscatePage } from './goodscate.page';

const routes: Routes = [
  {
    path: '',
    component: GoodscatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoodscatePageRoutingModule {}
