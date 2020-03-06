import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { StorageService } from '../services/storage.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public userinfo: any = {};

  constructor(public http: HttpClient, public storage: StorageService, public eventService: EventService) {
    // 初始化用户信息
    var userinfo = this.storage.get('userinfo')
    if (userinfo && userinfo.userName) {
      this.userinfo = userinfo
    } else {
      this.userinfo = ''
    }
  }

  //ionic 生命周期函数
  //在页面 tab 切换 以及第一次加载的时候会触发 但是 login返回的时候不会触发
  // ionViewWillEnter() {
  //   console.log(123);

  //  
  // }

  // 解决问题： 注册、登录成功返回以后立即显示用户信息

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

  doLoginOut() {
    this.storage.remove('userinfo')
    this.eventService.event.emit('userlogin')
    this.eventService.event.emit('useraction')
  }

}
