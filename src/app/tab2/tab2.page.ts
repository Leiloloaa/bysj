import { Component } from '@angular/core';
import { ConnectService } from '../services/connect.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  public ly: any[];
  public lyContent: string;
  public domain: string;
  constructor(public connect: ConnectService, public http: HttpClient, public alertController: AlertController) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.fetch()
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '提示',
      message: '您的留言已提交,敬请期待您想要的物品！',
      buttons: ['确认']
    });

    await alert.present();
  }

  async inFoAlert() {
    const alert = await this.alertController.create({
      header: '提示',
      message: '您的留言未填写，请您填写！',
      buttons: ['确认']
    });

    await alert.present();
  }
  // 增加评论
  addComment() {
    if (!this.lyContent) {
      this.inFoAlert()
      return true
    }
    this.presentAlert()
    //  alert('提交数据' + this.lyContent)
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    let api = "http://localhost:3001/api/lys";
    this.http.post(api, { "userName": '匿名用户', "lyTime": new Date(), "lyContent": this.lyContent, "__v": 0 }, httpOptions)
      .subscribe((response) => {
        console.log(response);
      })
    this.lyContent = ''
  }

  fetch() {
    let api = '/lys'
    this.connect.get(api).then((response: any) => {
      this.ly = response;
    })
  }
}
