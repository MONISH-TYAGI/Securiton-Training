import { Component } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import {FormControl,FormControlName,FormGroup} from '@angular/forms';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})  
export class AppComponent {
  users2:any;
  constructor(private userdata:UserdataService)
  {
    console.log("userdata",userdata.users())
    this.users2=userdata.users();
    userdata.users().subscribe((data)=>{
      console.warn(data)
      this.users2=data;
    });
  }
  loginForm=new FormGroup({
 user:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),  
  password:new FormControl('',[Validators.required,Validators.minLength(5)])
  });
  loginUser()
  {
    console.warn(this.loginForm.value);
  }
  get user(){
    return this.loginForm.get('user');
  }
  get password(){
    return this.loginForm.get('password');
  }
  title = 'learning1';
  userData:any={};
 
  list:any[]=[];
  value=10;
  updateChild(){
    this.value=Math.floor(Math.random()*10)
  }
  addTask(item:string)
  {
    this.list.push({id:this.list.length+1,name:item});
    console.warn(this.list);
  }
  removeTask(item:any)
  {
    this.list=this.list.filter(item1=>item1.id!==item);
  }
  getData2(data:NgForm) 
  {
    console.warn(data)
    this.userData=data;
  }
  data:string="";
  name:string="monish";
  disable1=true;
  disable2=false; 
  color="red";
  color2="green";
  show=false;
  bgColor='green';
  updateColor(){
    this.color="green";
    this.bgColor="red";
  }
  getData(param:string){
    console.warn(param);
    this.data=param;
  }
  users=['Anil','Bhaker','Sam'];
  userDetails=[
 { name :'Anil', age: 25, email:'anil@gmail.com'},
 { name :'Bhaker', age: 26, email:'bhaker@gmail.com'},
 { name :'Sam', age: 27, email:'Sam@gmail.com'}
  ];
status="x";
updateData(item:string)
{
  console.log(item)
  this.status=item;
}
current:any="";
getVal(item:HTMLInputElement)
{
  console.warn(item);
}
currVal=10;
data2:{name:string,phn:number}={name:"monish",phn:1234567890};
item2:string[]=["monish","anil","sam"];
getData5(item:number[])
{
  console.warn(item);
  return item;
}
//this.getData5([5]); // this not run because ts file ke method html mai call krte hai directly not within ts file function 
getItem(){
this.getData5([20]);
}
getData3(currVal:number | string){
  if(typeof currVal==="number"){
return currVal*20;
}
return currVal;
}
getData4()
{
  this.getData3("hello")
}
today=Date(); 
userLogin(item:any)
{
  console.warn(item);

}
getUserFormData(data:any)
{
  
  this.userdata.saveUsers(data).subscribe((data)=>{
    console.warn(data);
  }
  );
  
}
}


