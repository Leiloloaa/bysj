import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

//引入接受路由传值的模块
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.page.html',
  styleUrls: ['./myorder.page.scss'],
})
export class MyorderPage implements OnInit {
  public flag: boolean = true;
  public good: any[] = [];
  public goods: any[] = [];
  constructor(public route: ActivatedRoute, public http: HttpClient) { }

  ngOnInit() {
    this.route.queryParams.subscribe((data) => {
      // console.log(JSON.stringify(data));
      this.requestContent(data.id);
    })
  }
  requestContent(id) {
    let api = 'http://localhost:3001/goodsdetails/' + id
    this.http.get(api).subscribe((data: any) => {
      this.good = data;
      // console.log(this.good);
      this.addMyOrder(this.good);
      this.flag = false
    })
  }
  addMyOrder(good) {
    // goods 是空的情况 直接加进去
    // if (this.goods.length == 0) {
    //   console.log('购物车里没有商品的时候');
    //   this.goods.push(good)
    // }
    // goods 里有商品的时候
    // 问题 但重复第二个商品的时候 会有问题
    // if (this.goods.length >= 1) {
    //   for (var i = 0; i < this.goods.length; i++) {
    //     if (this.goods[i].goodsName == good.goodsName) {
    //       console.log('购物车中有此商品');
    //     } else {
    //       console.log('添加商品成功');
    this.goods.push(good)
    //   }
    // }
    // }
  }

}
