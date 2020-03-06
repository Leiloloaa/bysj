import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { NavController } from '@ionic/angular'
import { StorageService } from '../services/storage.service'
import { EventService } from '../services/event.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  public userName: string;
  public userPsd: string;
  public ruserPsd: string;
  public value: string;
  public address: string;
  public school: string;
  public userContent: string;

  public userinfo: any = {};
  constructor(public http: HttpClient, public navController: NavController, public storage: StorageService,public eventService:EventService) { }

  ngOnInit() {
  }

  doRegister() {
    if (this.userPsd != this.ruserPsd) {
      alert('密码不相等')
    } else if (this.userPsd.length < 6) {
      alert('密码长度不能小于6位')
    } else {
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      let api = "http://localhost:3001/api/users";
      this.http.post(api, { "userName": this.userName, "userPsd": this.userPsd, "userSex": this.value, "address": this.address, "school": this.school, "userContent": this.userContent, "__v": 0 }, httpOptions)
        .subscribe((response) => {
          if (response) {
            // 1. 保存用户信息 
            this.userinfo = {
              "userName": this.userName, "userPsd": this.userPsd, "userSex": this.value, "address": this.address, "school": this.school, "userContent": this.userContent
            }
            this.storage.set('userinfo', this.userinfo)
            // 2. 跳转 回到根目录
            this.navController.navigateRoot('/tabs/tab4')
            // 3. 通知用户中心更新用户信息
            this.eventService.event.emit('useraction')
          } else {
            alert('error')
          }
        })


    }


  }


}
