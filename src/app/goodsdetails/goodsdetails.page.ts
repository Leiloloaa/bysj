import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectService } from '../services/connect.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActionSheetController } from '@ionic/angular';

import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-goodsdetails',
  templateUrl: './goodsdetails.page.html',
  styleUrls: ['./goodsdetails.page.scss'],
})
export class GoodsdetailsPage implements OnInit {
  public good: any[] = [];
  public domain: string;
  // public goodComments: any;

  public hasData: boolean = false;
  constructor(public nav: NavController, public router: ActivatedRoute, public connect: ConnectService, public http: HttpClient, public actionSheetController: ActionSheetController) {
    this.domain = this.connect.domain

  }

  ngOnInit() {
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
