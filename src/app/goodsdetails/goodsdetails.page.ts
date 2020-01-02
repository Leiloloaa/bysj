import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectService } from '../services/connect.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-goodsdetails',
  templateUrl: './goodsdetails.page.html',
  styleUrls: ['./goodsdetails.page.scss'],
})
export class GoodsdetailsPage implements OnInit {
  public good: any[] = [];
  public domain: string;
  // public goodComments: any;
  constructor(public router: ActivatedRoute, public connect: ConnectService, public http: HttpClient) {
    this.domain = this.connect.domain

  }

  ngOnInit() {
    this.router.params.subscribe((value: any) => {
      this.requestContent(value.id)
      // // console.log(value)
    })
  }

  requestContent(id) {
    let api = 'http://localhost:3001/goodsdetails/' + id
    this.http.get(api).subscribe((data: any) => {
      this.good = data;
    })
  }
}
