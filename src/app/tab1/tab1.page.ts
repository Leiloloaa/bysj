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
  public goodsList: any[];
  public newgoodsList: any[] = [];
  public keywords: string;
  public flag: boolean = true;
  public pubList: any[];
  public domain: string;
  constructor(public connect: ConnectService, public loadingController: LoadingController) {
    this.domain = this.connect.domain
  }

  @ViewChild(IonInfiniteScroll, { static: true }) infiniteScroll: IonInfiniteScroll;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let api1 = '/pubs'
    this.connect.get(api1).then((response: any) => {
      // console.log(response);
      this.pubList = response;
    })

    this.getGoodsList()
  }

  // 获取数据 
  // todo 每次获取10-15条数据要如何实现
  getGoodsList() {
    let api = '/goods'
    this.connect.get(api).then((response: any) => {
      // console.log(response);
      this.goodsList = response;
    })
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
