import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UpdatapsdPageRoutingModule } from './updatapsd-routing.module';
import { StorageService } from '../services/storage.service'

@Component({
  selector: 'app-updatapsd',
  templateUrl: './updatapsd.page.html',
  styleUrls: ['./updatapsd.page.scss'],
})
export class UpdatapsdPage implements OnInit {

  public user: any[] = []
  public userId: string
  public userinfo: any
  constructor(public storage: StorageService, public navCtrl: NavController, public toastController: ToastController, public router: ActivatedRoute, public http: HttpClient) {
    // 初始化用户信息
    var userinfo = this.storage.get('userinfo')
    if (userinfo instanceof Array) {
      var userinfo = this.storage.get('userinfo')
      if (userinfo && userinfo[0].userName) {
        this.userinfo = userinfo[0]
      } else {
        this.userinfo = ''
      }
    } else {
      if (userinfo && userinfo.userName) {
        this.userinfo = userinfo
      } else {
        this.userinfo = ''
      }
    }
  }

  ngOnInit() {
  }

  upDataPsd(username: HTMLInputElement, passwordNew: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0 || passwordNew.value.length == 0 || password.value.length == 0) {
      this.presentToast();
    } else if (password.value !== passwordNew.value) {
      this.present1Toast();
    } else {
      let userId = this.userinfo._id
      let api = "http://localhost:3001/api/users/" + userId;
      let data = { "userName": username.value, "userPsd": password.value };
      this.http.put(api, data).subscribe((data: any) => {
        this.user = data;
      });
      this.storage.remove('userinfo')
      this.storage.set('userinfo', this.userinfo)
      this.goback()
    }
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

  async present1Toast() {
    const toast = await this.toastController.create({
      message: '您输入的密码两次不一样！请重新输入！',
      duration: 2000,
      position: 'middle',
      color: 'medium',
      cssClass: 'mytoast' // 注意写自定义样式 要写在全局 不然不会生效
    });
    toast.present();
  }

  goback() {
    this.navCtrl.back()
  }
}
