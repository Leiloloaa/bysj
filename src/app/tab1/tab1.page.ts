import { Component, OnInit, ViewChild } from '@angular/core';
import { ConnectService } from '../services/connect.service';
import { LoadingController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public config: {}; // 
  public focusList: any[] = []; // 轮播图
  public slidesOpts: {} = { // 配置轮播图属性
    speed: 400,
    autoplay: {
      delay: 2000,
    },
    loop: true // 循环轮播
  };
  public hotList: any[] = []; // 热门商品
  public hotListWidth: any = 400; // 热门商品初始长度
  public goodsList: any[];
  public newgoodsList: any[] = [];
  public keywords: string;
  public flag: boolean = true;
  public domain: string;
  public hasData: boolean = false; // 判断是否有数据 显示加载按钮

  // 构造函数只做初始化的操作
  constructor(public navController: NavController, public connect: ConnectService, public loadingController: LoadingController) {
    this.domain = this.connect.domain;
    this.config = this.connect.config;
  }

  @ViewChild('slide', { static: true }) slide;
  ngOnInit(): void {
    this.getFocusData()
    this.getHotData()
    this.getGoodsList()
  }

  // 当用户手动滑轮播图之后
  slideTouchEnd() {
    this.slide.startAutoplay()
  }

  // 跳转到搜索页面
  goSearch() {
    this.navController.navigateForward('/search')
  }

  // 获取搜索到的数据
  getItems(e) {
    this.newgoodsList = [];
    if (this.keywords != '' && this.keywords) {
      this.flag = false
    }
    for (var i = 0; i < this.goodsList.length; i++) {
      if (this.goodsList[i].goodsCate == this.keywords) {
        this.newgoodsList.push({
          id: this.goodsList[i]._id,
          goodsName: this.goodsList[i].goodsName,
          goodsPrice: this.goodsList[i].goodsPrice,
          goodsContent: this.goodsList[i].goodsContent,
          goodsCate: this.goodsList[i].goodsCate
        })
      }
    }
  }

  // 获取轮播图的数据
  getFocusData() {
    let api = "api/focus"
    this.connect.ajaxGet(api).then((response: any) => {
      // console.log(response);
      this.focusList = response.result;
    })
  }

  // 获取热门商品
  getHotData() {
    let api = "api/plist?is_hot=1"
    this.connect.ajaxGet(api).then((response: any) => {
      console.log(response);
      this.hotList = response.result;
      // 计算 hotListWidth 热门商品属性
      this.hotListWidth = this.hotList.length * 10 + 'rem';
    })
  }

  // 获取商品列表 
  // todo 每次获取10-15条数据要如何实现
  getGoodsList() {
    let api = '/goods'
    this.connect.get(api).then((response: any) => {
      // console.log(response);
      this.goodsList = response;
    })
    this.hasData = true;
  }
}
