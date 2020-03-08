import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../services/storage.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  // 搜索功能实想思路
  // 1. 获取类别输入款
  // 2. 调用接口 通过类比把符合条件的商品返回给前端
  // 3. 前端接受数据 渲染数据
  public keyWord: any;
  public searchGoods: [];
  public historySearch: [];

  ngOnInit() {
    this.historySearch = this.storage.get('searchList')
  }

  constructor(public navController: NavController, public http: HttpClient, public storage: StorageService) {

  }

  // 离开购物车时保存购物车数据
  ionViewWillLeave() {
    this.storage.set('searchList', this.historySearch)
  }

  goBack() {
    this.navController.navigateBack('/tabs/tab1');
  }

  doSearch() {
    let api = "http://localhost:3001/api/search/" + this.keyWord;
    this.http.get(api).subscribe((res: any) => {
      console.log(res);
      this.searchGoods = res
    });
  }
}
