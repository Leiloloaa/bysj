import { Component } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

//引入接受路由传值的模块
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public good: any[] = [];
  public goods: any[] = [];
  public selected: boolean = false;
  public selectedId: any;
  public selectedsId: any[] = [];
  constructor(public route: ActivatedRoute, public http: HttpClient) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.renderShopCar()
  }
  renderShopCar() {
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
      this.addShopCar(this.good);

    })
  }
  getId(e, goodsName) {
    console.log(!e.target.checked);
    this.selectedId = goodsName
    if (!e.target.checked) {
      this.selectedsId.push(this.selectedId)
      // console.log(this.selectedsId);
    } else {
      this.selectedsId.splice(this.selectedId, 1)
      // console.log(this.selectedsId)
    }
  }
  addShopCar(good) {
    // goods 是空的情况 直接加进去
    if (this.goods.length == 0) {
      console.log('购物车里没有商品的时候');
      this.goods.push(good)
    }
    // goods 里有商品的时候
    // 问题 但重复第二个商品的时候 会有问题
    if (this.goods.length >= 1) {
      for (var i = 0; i < this.goods.length; i++) {
        if (this.goods[i].goodsName == good.goodsName) {
          console.log('购物车中有此商品');
        } else {
          console.log('添加商品成功');
          this.goods.push(good)
        }
      }
    }
  }
  delGoods(id) {
    this.goods.splice(id, 1)
    console.log('删除商品');
  }
  sumGoods() {
    if (this.selectedsId.length != 0) {
      // 被选中的都保存在 selectedsId 数组中
      console.log('结算商品');
      this.delSelecteds()
      // console.log(this.selectedsId + '结算后的');
    } else {
      console.log('请您勾选商品');
    }
  }
  delSelecteds() {
    // 问题 根据selectedsId 数组中的值 删除数组对象中一样 id 的值
    // 是否要用到生命周期
    for (let j = 0; j < this.goods.length; j++) {
      // this.selectedsId.splice(this.selectedsId[i], 1)
      // console.log(this.selectedsId)
      // 要删除 数组 对象中 指定的 id 一项
      // // this.goods.splice(this.selectedsId[i], 1)
      if (this.selectedsId.length >= 2) {
        // this.newGoods = JSON.stringify(this.goods)
        // 如何大于2的情况下 删除
        for (let i = 0; i < this.selectedsId.length; i++) {
          if (this.selectedsId[i] === this.goods[j].goodsName) {
            // console.log(`在goods中删除了此 ID`);
            this.goods.splice(this.selectedsId[i], 1)
            // return this.goods
          }
          // console.log(this.goods)
        }
      } else {
        for (let i = 0; i < this.selectedsId.length; i++) {
          this.selectedsId.splice(0, 1)
          this.goods.splice(this.selectedsId[i], 1)
          // console.log(this.goods);
        }
      }
    }
  }
}

