import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectService } from '../services/connect.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActionSheetController } from '@ionic/angular';

import { NavController } from '@ionic/angular'

import { CartService } from '../services/cart.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-goodsdetails',
  templateUrl: './goodsdetails.page.html',
  styleUrls: ['./goodsdetails.page.scss'],
})
export class GoodsdetailsPage implements OnInit {
  public tab: any = 'list'; // 切换的值
  public good: any[] = [];
  public domain: string;
  public num: any = 1;
  public hasData: boolean = false;
  public cartNum: any = 0
  constructor(public nav: NavController, public router: ActivatedRoute, public connect: ConnectService, public http: HttpClient, public actionSheetController: ActionSheetController, public cartService: CartService, public storageService: StorageService) {
    this.domain = this.connect.domain
  }

  ngOnInit() {
    // 获取底部购物车数量
    var cartList = this.storageService.get('cartList')
    if (cartList) {
      this.cartNum = this.cartService.getCartNum(cartList)
    }

    this.router.params.subscribe((value: any) => {
      this.requestContent(value.id)
      // // console.log(value)
    })
  }

  goBack() { 
    // this.nav.back() // 不建议使用 因为它是直接返回到上一级
    this.nav.navigateBack('/tabs/tab1')
  }

  requestContent(id) {
    let api = 'http://localhost:3001/goodsdetails/' + id
    this.http.get(api).subscribe((data: any) => {
      this.good = data;
      this.hasData = true;
    })
  }

  // 需要优化
  changeAttr(e) {
    if (e.srcElement.nodeName == "SPAN") {
      var el = e.srcElement; // 获取当前点击的 span DOM 节点
      // 获取父节点
      var parent = el.parentNode;
      // 通过父找孩子
      var attrChildren = parent.children;
      // 让所有的自节点 去掉 active
      for (let i = 0; i < attrChildren.length; i++) {
        attrChildren[i].className = ''
      }
      el.className = "active"; // 给当前 dom 节点 加 active
    }
  }

  // 增加数量
  addNum() {
    this.num += 1
  }

  // 减少数量
  decNum() {
    if (this.num > 1) {
      this.num -= 1
    }
  }

  addCart() {
    var _id = this.good['_id']
    var goodsName = this.good['goodsName']
    var goodsPrice = parseInt(this.good['goodsPrice'])
    var amount = this.good['amount']
    var goodsPic = this.good['goodsImgSmall']
    var attr: any = '';
    var num = this.num
    var checked = true
    var spanActive = document.querySelectorAll('#myAttr .active')
    for (let i = 0; i < spanActive.length; i++) {
      attr += spanActive[i].innerHTML;
    }
    var cartJson = {
      _id,
      goodsName,
      goodsPrice,
      goodsPic,
      amount,
      attr,
      num,
      checked
    }

    // 1 获取
    var cartList = this.storageService.get('cartList')

    // 判断
    if (cartList && cartList.length > 0) {

      if (this.cartService.hasData(cartList, cartJson)) {
        // 有
        for (let i = 0; i < cartList.length; i++) {
          if (cartList[i]._id == cartJson._id) {
            cartList[i].num += cartJson.num
            // cartList[i].attr = cartJson.attr
          }
        }
      } else {
        // 如果没有
        cartList.push(cartJson)
      }
      this.storageService.set('cartList', cartList)
    } else {
      var temp: any[] = []
      temp.push(cartJson)
      this.storageService.set('cartList', temp)
    }

    // 修改底部购物车数量
    this.cartNum += cartJson.num

  }

  async showActionSheetController() {
    // await 是异步的 所以要加 async
    const actionSheet = await this.actionSheetController.create({
      header: '操作',
      mode: 'ios', // 确定好显示平台的样式 以免安卓和ios不一样 所以就共同使用ios样式
      backdropDismiss: false, // 点击空白区也不会消失
      buttons: [{
        text: '分享',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: '点赞',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: '取消',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
