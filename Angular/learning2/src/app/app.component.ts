import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})  
export class AppComponent {
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
}
