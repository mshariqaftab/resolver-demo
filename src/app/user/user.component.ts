import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.pipe(
      map(data => data['user']))
      .subscribe(res => this.users = res.data);
  }

}
