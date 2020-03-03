import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goodscate',
  templateUrl: './goodscate.page.html',
  styleUrls: ['./goodscate.page.scss'],
})
export class GoodscatePage implements OnInit {

  public cateList: any[] = [];
  public cateListGoods: any[] = [];
  constructor() {

    // 左侧
    for (let i = 0; i < 16; i++) {
      this.cateList.push(`分类${i}`)
    }

    // 右侧
    for (let i = 1; i <= 9; i++) {
      this.cateListGoods.push({
        pic: 'assets/0' + i + '.jpg',
        title: '第' + i + '个'
      })
    }
  }

  ngOnInit() {
  }

}
