import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// 在移动端使用 click 会延迟300毫秒 所以一般使用 tap 当作点击事件
// press 为长按
// 如果要使用手势事件的话 ionic4.x 是无法直接使用的 要先安装包 然后再导入
// 1. 装包
// cnpm i hammerjs --save
// 2. 引入
import 'hammerjs'

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
