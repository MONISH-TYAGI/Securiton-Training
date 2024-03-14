import { Component } from '@angular/core';
import { RegisterForm } from '../../types/auth';
// import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form:RegisterForm={
    email:'',
    password:'',
    confirm_password:'',
  }
  submit()
{
  console.log(this.form)
}
}
