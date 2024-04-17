import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';

const routes: Routes = [
{path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
{path:'user',loadChildren:()=>import('./users/users.module').then(m=>m.UsersModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
