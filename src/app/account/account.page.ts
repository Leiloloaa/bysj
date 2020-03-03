import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { NavController} from '@ionic/angular'
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  public userName: string;
  public userPsd: string;
  public value : string;
  public address : string;
  public school : string;
  public userContent: string;

  constructor(public http: HttpClient,public navController:NavController) { }

  ngOnInit() {
  }

  addUsers() {
    // alert('提交数据' + this.goodsName)
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    let api = "http://localhost:3001/api/users";
    this.http.post(api, { "userName": this.userName, "userPsd": this.userPsd, "userSex": this.value, "address": this.address,"school": this.school,"userContent": this.userContent, "__v": 0 }, httpOptions)
      .subscribe((response) => {
        console.log(response);
      })
    
  }

  doRegister(){
    // 回到根目录
    this.navController.navigateRoot('/tabs/tab4')
  }


}
