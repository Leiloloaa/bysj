import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { StorageService } from '../services/storage.service'
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userinfo: any = {
  }
  public returnUrl: any = ''
  constructor(public activatedRoute: ActivatedRoute, public http: HttpClient, public toastController: ToastController, public navCtrl: NavController, public storage: StorageService, public eventService: EventService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data: any) => {
      data.returnUrl ? this.returnUrl = data.returnUrl : this.returnUrl = '/tabs/tab4';
    })
  }

  doLogin() {
    if (this.userinfo.userName == 0) {
      this.presentToast();
    } else if (this.userinfo.userPsd.length < 6) {
      this.presentToast();
    } else {
      var data = { "userName": this.userinfo.userName, "userPsd": this.userinfo.userPsd };
      this.http.post("http://localhost:3001/api/login", data).toPromise()
        .then((res: any) => {
          // console.log(res)
          if (res.isSuccess != false) {
            // 1. 保存用户信息
            this.storage.set('userinfo', res)
            // 2. 跳转到个人中心
            this.navCtrl.navigateBack(this.returnUrl)

            // 3. 通知用户中心更新用户信息
            this.eventService.event.emit('userlogin')
          } else {
            this.presentToast();
          }
        })
        .catch(err => {
          console.log(err)
        });
    }
  }

  goBack() {
    this.navCtrl.navigateForward(this.returnUrl)
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: '您输入的用户名或者密码为空！请重新输入！',
      duration: 2000,
      position: 'middle',
      color: 'medium',
      cssClass: 'mytoast' // 注意写自定义样式 要写在全局 不然不会生效
    });
    toast.present();
  }
}
