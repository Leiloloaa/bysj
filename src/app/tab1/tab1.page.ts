import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../services/connect.service';
import { LoadingController } from '@ionic/angular';


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
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let api = '/goods'
    this.connect.get(api).then((response: any) => {
      // console.log(response);
      this.goodsList = response;
    })

    let api1 = '/pubs'
    this.connect.get(api1).then((response: any) => {
      // console.log(response);
      this.pubList = response;
    })
  }

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

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'loading...',
      duration: 400
    });
    await loading.present();
  }
}
