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
    await this.getAllUsers("INITIALIZING");
  }

  async getSpecificUser(index:number) {
    const result = await this.userfetch.grabSpecificUser(index);
    return result;
  }

  async getAllUsers(message:string) {
    console.log(message);
    const result = await this.userfetch.grabAllUsers();
    this.userlist = result;
  }
}
