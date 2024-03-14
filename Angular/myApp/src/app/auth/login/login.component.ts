import { Component } from '@angular/core';
import {LoginForm} from '../../types/auth';
// import { AuthService } from '../auth.servi/ce';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
form:LoginForm={
  email:'',
  password:'',
}
submit()
{
  console.log(this.form)
}
}
