import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyorderPage } from './myorder.page';

const routes: Routes = [
  {
    path: '',
    component: MyorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyorderPageRoutingModule {}
