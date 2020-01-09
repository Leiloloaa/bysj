import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.page.html',
  styleUrls: ['./myinfo.page.scss'],
})
export class MyinfoPage implements OnInit {

  public user: any[] = [];
  constructor(public router: ActivatedRoute, public http: HttpClient) {
  }

  ngOnInit() {
    this.router.params.subscribe((queryParams) => {
      let userId = this.router.snapshot.queryParams["id"];
      this.requestContent(userId);
    })
  }

  requestContent(id) {
    let api = 'http://localhost:3001/usersdetails/' + id
    this.http.get(api).subscribe((data: any) => {
      this.user = data;
    })
  }

}
