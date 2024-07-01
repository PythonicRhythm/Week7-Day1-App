import { Component, EventEmitter, Output } from '@angular/core';
import { UserFetchService } from '../user-fetch.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
  @Output() additionEvent = new EventEmitter<string>();
  id:any;
  name:any;
  username:any;
  password:any;
  department:any;

  constructor(private userfetch: UserFetchService) {}

  async addUser() {
    let newUser = {
      id: this.id,
      name: this.name,
      username: this.username,
      password: this.password,
      department: this.department
    };
    const response = await this.userfetch.addNewUser(newUser);
    if(response != undefined && response != null) {
      this.additionEvent.emit("ADDITION");
      console.log("User Added!");
      this.id = "";
      this.name = "";
      this.username = "";
      this.password = "";
      this.department = "";
    }
    else console.log("Error: user was not added.")
  }
}
