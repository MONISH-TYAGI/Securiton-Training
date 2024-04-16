import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
url="https://jsonplaceholder.typicode.com/users"

  constructor(private http:HttpClient) { }
  users(){
    // return[
    //   {name:'Anil',age:28,email:'anil@gmail.com'},
    //   {name:'Sam',age:28,email:'sam@gmail.com'},
    //   {name:'Peter',age:28,email:'peter@gmail.com'},
    // ]
    return this.http.get(this.url);
  }
  saveUsers(data:any){
    return this.http.post(this.url,data);
  }
}
