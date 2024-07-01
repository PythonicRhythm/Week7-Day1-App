import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserFetchService {

  private url = "http://localhost:3000/users";

  private GETOptions = {
    method: "GET",
  };

  constructor() {}

  async grabSpecificUser(index:number) {
    const response = await fetch(this.url+"/"+index, this.GETOptions);
    const data = await response.json();
    if(data != undefined || data != null) {
      console.log(response.status, data);
      if(response.status == 200) {
        return data;
      }
      else {
        console.log("Not Returning")
      }
    }
    console.log(response.status, data);
    return null;
  }

  async grabAllUsers() {
    const response = await fetch(this.url);
    const data = await response.json();
    if(data != undefined || data != null) {
      console.log(response.status, data);
      if(response.status == 200) {
        return data;
      }
      else {
        console.log("Status Code not 200, not returning data.")
      }
    }
    console.log(response.status, data.users);
    return null;
  }
}
