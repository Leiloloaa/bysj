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

  constructor(public http: HttpClient) { }

  // get 请求数据的 异步方法
  get(api) {
    return new Promise((resolve, reject) => {
      this.http.get(this.domain + api).subscribe((response) => {
        resolve(response);
      })
    })
  }

}
