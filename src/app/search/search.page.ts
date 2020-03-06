import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

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

  ngOnInit() {
  }
  public flag=true;

  public productList=[];  //商品列表

  constructor(public navController:NavController) {


    for(var i=1;i<=10;i++){
      this.productList.push({
        pic:'assets/0'+i+'.jpg',
        title:'运动套装女春秋韩版2019新款时尚连帽休闲套装女卫衣女开衫长'+i,
        price:i*22
      })
    }
   }
  goBack() {
    this.navController.navigateBack('/tabs/tab1');
  }
  
  doSearch(){
    this.flag=false;
  }
}
