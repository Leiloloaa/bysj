import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Location } from '@angular/common';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  public comment: string;
  @Input() goodsComments: any;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    console.log();
  }
  addComment() {
    // alert('提交数据' + this.comment)
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    let api = 'http://localhost:3001' + location.pathname;
    this.http.post(api, { "goodsComments": this.comment ,"goodsTime":new Date()}, httpOptions)
      .subscribe((response) => {
        console.log(response);
      })
  }

}
