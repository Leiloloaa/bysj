import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public http: HttpClient, public toastController: ToastController, public navCtrl: NavController) { }

  ngOnInit() {
  }

  login(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {
      this.presentToast();
    } else if (password.value.length == 0) {
      this.presentToast();
    } else {
      let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
      // var data = { "userName": username.value, "password": password.value };
      // this.http.post("/api/login", data).toPromise()
      //   .then(res => {
      //     console.log(res)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   });

      // 带参数传参

      this.navCtrl.navigateBack('/tabs/tab4', {
        queryParams: {
          id: '5e0164f6e4b5f522acb513b6'
        }
      });
      console.log('登录验证');

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
}
