import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  // 设置好请求api的头  以后就只需改1处
  public domain: string = 'http://localhost:3001/api'

  // 配置文件
  public config: any = {
    urlHeader: 'http://jd.itying.com/'
  }


  constructor(public http: HttpClient) { }

  // get 请求数据的 异步方法
  get(url) {
    let api = this.domain + url
    return new Promise((resolve, reject) => {
      this.http.get(api).subscribe((response) => {
        resolve(response);
      }, (err) => {
        reject(err)
      })
    })
  }


  /**
   * 获取数据的方法
   * @param url 接口地址
   */

  ajaxGet(url) {
    let api = this.config.urlHeader + url
    return new Promise((resolve, reject) => {
      this.http.get(api).subscribe((res: any) => {
        resolve(res)
      }, (err) => {
        reject(err)
      })
    })
  }

  /**
   * 提交数据的方法
   * @param url 接口地址
   */

  ajaxPost(url, json) {
    let api = this.config.urlHeader + url
    return new Promise((resolve, reject) => {
      this.http.get(api, json).subscribe((res: any) => {
        resolve(res)
      }, (err) => {
        reject(err)
      })
    })
  }
}
