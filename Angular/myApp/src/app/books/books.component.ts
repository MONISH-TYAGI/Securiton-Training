import { Component } from '@angular/core';
 import { Book } from '../types/Book';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
name:string="Clean Code";
author:string="Robert C. Martin";
src:string="https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG+L._SX258_BO1,204,203,200_.jpg";
name2:string="The Pragmatic Programmer";
author2:string="David Thomas";
src2:string="https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg";
isDisabled:boolean=false;
constructor(){}
ngOnInit():void{}
handleClick(){
  alert("Button Clicked")
  // this.isDisabled=!this.isDisabled;
}
myName:string="";
isShow:boolean=false;

handleInput(event:any)
{
  this.myName=event.target.value;
}
addToCart(){
  console.log('add')
}
books: Book[] = [
  {
    name: "clean code",
    author: "Robert C. Martin",
    image: "https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG+L._SX258_BO1,204,203,200_.jpg",
    amount:100
  },
  {
    name: "The Pragmatic P rogrammer",
    author: "David Thomas",
    image: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg",
    amount:200
  }
  ,
  {
    name: "The Pragmatic Programmer",
    author: "David Thomas",
    image: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg",
    amount:200
  }
  ,
  {
    name: "The Pragmatic Programmer",
    author: "David Thomas",
    image: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg",
    amount:200
  }
];
}
