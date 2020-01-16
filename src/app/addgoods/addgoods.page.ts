import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-addgoods',
  templateUrl: './addgoods.page.html',
  styleUrls: ['./addgoods.page.scss'],
})
export class AddgoodsPage implements OnInit {
  public goodsName: string;
  public goodsPrice: string;
  public value: string;
  public goodsContent: string;
  public goodsImg: string;
  public goodsImgSmall: string;
  constructor(public http: HttpClient, public navCtrl: NavController, public toastController: ToastController) { }

  ngOnInit() {
  }

  addgoods() {
    // alert('提交数据' + this.goodsName)
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    let api = "http://localhost:3001/api/goods";
    this.http.post(api, { "goodsName": this.goodsName, "goodsPrice": this.goodsPrice, "goodsContent": this.goodsContent, "goodsCate": this.value, "goodsImg": this.goodsImg, "goodsImgSmall": this.goodsImgSmall, "__v": 0 }, httpOptions)
      .subscribe((response) => {
        console.log(response);
      })
    this.presentToast()
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: '您的商品已发布',
      duration: 2000,
      position: 'middle',
      color: 'medium',
      cssClass: 'mytoast' // 注意写自定义样式 要写在全局 不然不会生效
    });
    toast.present();
    this.goback();
  }

  goback() {
    this.navCtrl.back()
  }
}
