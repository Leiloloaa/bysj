import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  public comment: string;
  @Input() goodsComments: any;
  constructor(public http: HttpClient, public toastController: ToastController) { }

  ngOnInit() {
    console.log();
  }
  addComment() {
    if (!this.comment) {
      this.inFoToast()
      return false
    } else {
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      let api = 'http://localhost:3001' + location.pathname;
      this.http.post(api, { "goodsComments": this.comment, "goodsTime": new Date() }, httpOptions)
        .subscribe((response) => {
          console.log('评论已提交');
        })
      this.comment=''
      this.presentToast()
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: '您的评论已提交',
      duration: 2000,
      position:'middle',
      color: 'medium',
      cssClass:'mytoast' // 注意写自定义样式 要写在全局 不然不会生效
    });
    toast.present();
  }

  async inFoToast() {
    const toast = await this.toastController.create({
      message: '请输入评论内容！',
      duration: 2000,
      position:'middle',
      color: 'medium',
      cssClass:'mytoast' // 注意写自定义样式 要写在全局 不然不会生效
    });
    toast.present();
  }

}
