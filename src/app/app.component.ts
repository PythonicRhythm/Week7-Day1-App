import { Component, OnInit } from '@angular/core';
import { UserFetchService } from './user-fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Week7-Day1-App';
  userlist:any;

  constructor(private userfetch: UserFetchService) {}

  async ngOnInit() {
    this.userlist = await this.getAllUsers();
  }

  async getSpecificUser(index:number) {
    const result = await this.userfetch.grabSpecificUser(index);
    return result;
  }

  async getAllUsers() {
    const result = await this.userfetch.grabAllUsers();
    return result;
  }
}
