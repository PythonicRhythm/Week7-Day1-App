import { Component, Input, OnInit } from '@angular/core';
import { UserFetchService } from '../user-fetch.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  @Input() userid:any;
  @Input() name:any;
  @Input() username:any;
  @Input() password:any;
  @Input() department:any;

  constructor(private userfetch: UserFetchService) {}

  ngOnInit() {
  }

}
