import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatapsdPage } from './updatapsd.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatapsdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatapsdPageRoutingModule {}
