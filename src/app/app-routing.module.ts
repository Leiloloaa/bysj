import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'addgoods',
    loadChildren: () => import('./addgoods/addgoods.module').then( m => m.AddgoodsPageModule)
  },
  {
    path: 'goodsdetails/:id',
    loadChildren: () => import('./goodsdetails/goodsdetails.module').then( m => m.GoodsdetailsPageModule)
  },
  {
    path: 'myorder',
    loadChildren: () => import('./myorder/myorder.module').then( m => m.MyorderPageModule)
  },
  {
    path: 'myinfo',
    loadChildren: () => import('./myinfo/myinfo.module').then( m => m.MyinfoPageModule)
  },
  {
    path: 'updatapsd',
    loadChildren: () => import('./updatapsd/updatapsd.module').then( m => m.UpdatapsdPageModule)
  },  {
    path: 'goodscate',
    loadChildren: () => import('./goodscate/goodscate.module').then( m => m.GoodscatePageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },

 

  



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
