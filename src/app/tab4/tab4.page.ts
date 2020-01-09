import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public flag: boolean = true;
  public user: any[] = [];
  constructor(public router: ActivatedRoute, public http: HttpClient) { }

  ngOnInit() {
    this.router.params.subscribe((queryParams) => {
      let userId = this.router.snapshot.queryParams["id"];
      this.requestUser(userId);
    })
  }

  requestUser(userId) {
    let api = 'http://localhost:3001/usersdetails/' + userId
    this.http.get(api).subscribe((data: any) => {
      this.user = data;
      this.flag = false;
    })
  }

}
