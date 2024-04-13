import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
constructor(){}
@Input() item:{name:string,age:number,email:string}={name:'',age:0,email:''};
ngOnInit():void{
  
}
}
