import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyinfoPage } from './myinfo.page';

const routes: Routes = [
  {
    path: '',
    component: MyinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyinfoPageRoutingModule {}
