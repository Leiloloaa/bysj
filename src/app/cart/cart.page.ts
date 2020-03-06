import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

//引入接受路由传值的模块
import { ActivatedRoute } from '@angular/router';

import { StorageService } from '../services/storage.service';
import { ConnectService } from '../services/connect.service'
import { CartService } from '../services/cart.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public list: any = []
  public allPrice: any = 0
  public isCheckedAll: boolean = true
  public isEdit: boolean = false // 是否编辑
  public hasData: boolean = false // 是否有数据
  constructor(public navController:NavController,public route: ActivatedRoute, public http: HttpClient, public storageService: StorageService, public connectService: ConnectService, public cartService: CartService) {
  }

  // ionic 生命周期函数 ngInit 只会执行一次
  ionViewDidEnter(): void {
    this.getCartsData();
    this.isCheckAllFn();
  }

  // 离开购物车时保存购物车数据
  ionViewWillLeave() {
    this.storageService.set('cartList', this.list)
  }

  // 监听 checkbox 改变
  checkboxChange() {
    this.isCheckAllFn();
    // 获取选中商品的总价
    this.allPrice = this.cartService.getAllPrice(this.list)
  }

  getCartsData() {
    var cartList = this.storageService.get('cartList')
    if (cartList && cartList.length > 0) {
      this.list = cartList
      this.hasData = true
    } else {
      this.list = []
      this.hasData = false
    }
    // 获取选中商品的总价
    this.allPrice = this.cartService.getAllPrice(this.list)
  }


  ngOnInit(): void {
    // this.renderShopCar()
  }

  // 减少
  decCount(item: any) {
    if (item.num > 1) {
      item.num--
    }
    // 获取选中商品的总价
    this.allPrice = this.cartService.getAllPrice(this.list)
  }

  // 增加
  addCount(item: any) {
    if (item.num < item.amount) {
      item.num++
    }
    // 获取选中商品的总价
    this.allPrice = this.cartService.getAllPrice(this.list)
  }

  // 判断是否全选
  isCheckAllFn() {
    if (this.cartService.getCheckedNum(this.list) == this.list.length) {
      this.isCheckedAll = true
    } else {
      this.isCheckedAll = false
    }
  }

  // 全选反选
  checkAll() {
    if (this.isCheckedAll) {
      for (let i = 0; i < this.list.length; i++) {
        this.list[i].checked = false
      }
      this.isCheckedAll = false
    } else {
      for (let i = 0; i < this.list.length; i++) {
        this.list[i].checked = true
      }
      this.isCheckedAll = true
    }
  }

  // 删除购物车选中商品
  doDelete() {
    // 获取未选中的商品
    let noCheckedCart = []
    for (let i = 0; i < this.list.length; i++) {
      if (!this.list[i].checked) {
        noCheckedCart.push(this.list[i])
      }
    }
    // 将未选中的商品赋给 list
    this.list = noCheckedCart
    this.list.length > 0 ? this.hasData = true : this.hasData = false
    // 然后将 list 保存到localStorage中 选中的就自动没了
    this.storageService.set('cartList', this.list)

    this.isEdit = !this.isEdit
  }

  // 去结算
  doCheckOut() {
    let tempArr = []
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].checked) {
        tempArr.push(this.list[i])
      }
    }

    if (tempArr.length > 0) {
      this.storageService.set('checkoutdata', tempArr)
      this.navController.navigateForward(['/checkout'], {
        queryParams: {
          returnUrl: '/cart'
        }
      })
    } else {
      alert('您还未选择需要结算的商品')
    }
  }
}


