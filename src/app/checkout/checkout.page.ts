import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  public returnUrl = '';
  public userinfo: any = {};
  public address: any;
  public list: any[] = [];
  public flag: boolean = false
  public goodsSum: any;

  constructor(public activatedRoute: ActivatedRoute, public navController: NavController, public storage: StorageService) {

  }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((data: any) => {
      data.returnUrl ? this.returnUrl = data.returnUrl : this.returnUrl = '/tabs/tab3';
    })

  }


  ionViewDidEnter() {

    //获取用户信息
    var userinfo = this.storage.get('userinfo');
    if (userinfo && userinfo[0].userName) {
      this.userinfo = userinfo[0];
      this.address = userinfo[0].address
    } else {
      this.userinfo = '';
    }

    //获取去结算的商品
    this.list = this.storage.get('checkoutdata');
    // console.log(this.list);

    var sum = 0
    for (let i = 0; i < this.list.length; i++) {
      sum += this.list[i].goodsPrice;
      console.log(this.list[i].goodsPrice);
    }
    this.goodsSum = sum
  }

  goBack() {
    this.navController.navigateBack(this.returnUrl);
  }

  doOrder(){
    this.navController.navigateBack('/myorder')
  }
}
