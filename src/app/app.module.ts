import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 引人 http
import { HttpClientModule } from '@angular/common/http';

// 引入公共服务
import { ConnectService } from '../app/services/connect.service'
import { StorageService } from '../app/services/storage.service'
import { EventService } from '../app/services/event.service'
import { CartService } from '../app/services/cart.service'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({
    mode: 'ios', // 配置 android ios 统一样式
    backButtonText: '返回', // 修改默认返回文字
    backButtonIcon: 'arrow-back' // 配置返回按钮图标
  }), AppRoutingModule, HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ConnectService,
    StorageService,
    EventService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
