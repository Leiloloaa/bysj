import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

//引入接受路由传值的模块
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.page.html',
  styleUrls: ['./myorder.page.scss'],
})
export class MyorderPage implements OnInit {
  public returnUrl = '';
  public userinfo: any = {};
  public list: any[] = [];
  public newList: any[] = []
  constructor(
    public route: ActivatedRoute,
    public http: HttpClient,
    public navController: NavController,
    public storage: StorageService
  ) {
    this.route.queryParams.subscribe((data: any) => {
      data.returnUrl ? this.returnUrl = data.returnUrl : this.returnUrl = '/tabs/tab4';
    })
  }

  ngOnInit() {

  }


  ionViewDidEnter() {

    // 获取用户信息
    var userinfo = this.storage.get('userinfo');
    if (userinfo && userinfo[0].userName) {
      this.userinfo = userinfo[0];
    } else {
      this.userinfo = '';
    }
    // 获取结算商品
    this.list = this.storage.get('checkoutdata');
    this.postData()
  }

  postData() {
    var userName = this.userinfo.userName
    var _id = this.userinfo._id
    var address = this.userinfo.address

    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    let api = "http://localhost:3001/api/orders";
    this.http.post(api, {
      "goodsName": this.list[0]["goodsName"],
      "goodsPrice": this.list[0]["goodsPrice"],
      "goodsStatu": '已支付',
      "goodsDeliver": '未发货',
      "userName": userName,
      "userId": _id,
      "address": address,
      "attr":this.list[0]["attr"],
      "__v": 0
    }, httpOptions)
      .subscribe((response) => {
        console.log(response);
      })

  }
  goBack() {
    this.navController.navigateBack(this.returnUrl);
  }

}
