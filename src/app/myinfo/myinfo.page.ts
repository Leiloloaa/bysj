import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { EventService } from '../services/event.service';
import { StorageService } from '../services/storage.service'
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.page.html',
  styleUrls: ['./myinfo.page.scss'],
})
export class MyinfoPage implements OnInit {

  public userinfo: any = {};

  constructor(public http: HttpClient, public storage: StorageService, public eventService: EventService, public navController: NavController, ) {

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

    // 监听注册 注册成功的事件
    this.eventService.event.on('useraction', () => {
      var userinfo = this.storage.get('userinfo')
      if (userinfo && userinfo.userName) {
        this.userinfo = userinfo
      } else {
        this.userinfo = ''
      }
    })

    // 监听注册 登录成功的事件
    this.eventService.event.on('userlogin', () => {
      var userinfo = this.storage.get('userinfo')
      if (userinfo && userinfo[0].userName) {
        this.userinfo = userinfo[0]
      } else {
        this.userinfo = ''
      }
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // 用户点返回后 将数据提交到服务器
    console.log(this.userinfo);
    let api = "http://localhost:3001/api/users/" + this.userinfo._id;
    let data = { "userName": this.userinfo.userName, "userSex": this.userinfo.userSex, "school": this.userinfo.school, "address": this.userinfo.address, "userContent": this.userinfo.userContent };
    this.http.put(api, data).subscribe((data: any) => {
      this.userinfo = data;
      this.storage.remove('userinfo')
      this.storage.set('userinfo', this.userinfo)
    });
  }

  goBack() {
    this.navController.navigateBack('/tabs/tab4');
  }

}
