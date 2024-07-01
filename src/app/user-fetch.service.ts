import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserFetchService {

  private url = "http://localhost:3000/users";

  private GETOptions = {
    method: "GET",
  };

  private DELOptions = {
    method: "DELETE",
  };

  private POSTOptions = {
    method: "POST",
    body: ""
  };

  private PUTOptions = {
    method: "PUT",
  };

  constructor() {}

  async addNewUser(userinfo:any) {
    this.POSTOptions.body = JSON.stringify(userinfo);
    const response = await fetch(this.url, this.POSTOptions);
    const data = await response.json();
    if(data != undefined || data != null) {
      console.log(response.status, data);
      if(response.status == 201) {
        return data;
      }
      else {
        console.log("Not Returning");
      }
    }
    console.log(response.status, data);
    return null;
  }

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

  async deleteUser(index:number) {
    const response = await fetch(this.url+"/"+index, this.DELOptions);
    const data = await response.json();
    console.log(response.status, data);
    return response.status;
  }
}
