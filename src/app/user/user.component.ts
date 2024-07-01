import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserFetchService } from '../user-fetch.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() userid:any;
  @Input() name:any;
  @Input() username:any;
  @Input() password:any;
  @Input() department:any;
  @Output() deletionEvent = new EventEmitter<string>();

  constructor(private userfetch: UserFetchService) {}

  async deleteUser() {
    const response = await this.userfetch.deleteUser(this.userid);
    if(response == 200) {
      this.deletionEvent.emit("DELETION");
      console.log("User Deleted!");
    }
    else console.log("Error: user was not deleted.")
  }

}
