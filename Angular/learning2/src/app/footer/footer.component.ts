import { Component } from '@angular/core';
import { UserdataService } from '../services/userdata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
users:any;
constructor(private userdata:UserdataService)
{
  console.log("userdata",userdata.users())
  this.users=userdata.users();
}
}
