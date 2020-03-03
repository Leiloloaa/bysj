import { Component, OnInit, ViewChild } from '@angular/core';
import { ConnectService } from '../services/connect.service';
import { LoadingController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public slidesList: any[] = []; // 轮播图
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
  constructor(public connect: ConnectService, public loadingController: LoadingController) {
    this.domain = this.connect.domain;

    for (let i = 1; i <= 3; i++) {
      this.slidesList.push({
        pic: 'assets/slide0' + i + '.png',
        url: '',
      })
    }

    for (let i = 1; i <= 9; i++) {
      this.hotList.push({
        pic: 'assets/0' + i + '.jpg',
        title: '第' + i + '个'
      })
    }

    // 计算 hotListWidth 热门商品属性
    this.hotListWidth = this.hotList.length * 10 + 'rem';
  }

  // @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;
  @ViewChild('slide', { static: true }) slide;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.getGoodsList()
  }

  // 当用户手动滑轮播图之后
  slideTouchEnd() {
    this.slide.startAutoplay()
  }

  // 获取数据 
  // todo 每次获取10-15条数据要如何实现
  getGoodsList() {
    let api = '/goods'
    this.connect.get(api).then((response: any) => {
      // console.log(response);
      this.goodsList = response;
    })
    this.hasData = true;
  }

  // loadData(event) {
  //   setTimeout(() => {
  //     // this.getGoodsList();
  //     event.target.complete(); // 此次获取已结束 可以开始下次获取

  //     // 判断如果大于goodsList的长度 就停用 这个是根据服务器的数据来设定的
  //     // 只展示最多30条数据
  //     // if (this.goodsList.length > 30) {
  //     //   event.target.disabled = true;
  //     // }
  //   }, 500);
  // }

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

  // async presentLoading() {
  //   const loading = await this.loadingController.create({
  //     message: 'loading...',
  //     duration: 400
  //   });
  //   await loading.present();
  // }
}
