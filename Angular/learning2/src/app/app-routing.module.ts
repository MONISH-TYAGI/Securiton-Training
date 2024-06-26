import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NoPageComponent} from './no-page/no-page.component'
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent} from './about-me/about-me.component';
import { HomeInnerComponent } from './home-inner/home-inner.component';


const routes: Routes = [
  {
    component:AboutComponent,
    path:'about',
    children:[
      {path:'company',component:AboutCompanyComponent},
      {path:'me',component:AboutMeComponent}
    ]
  },
  {
    path:'user/:id',
    component:UserComponent
  },
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'home-inner',
        component:HomeInnerComponent
      },
    ]

  },
  {
    path:'**',
    component:NoPageComponent
  }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
