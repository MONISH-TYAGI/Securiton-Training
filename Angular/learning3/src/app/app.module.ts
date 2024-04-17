import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UserRoutingModule} from './users/user-routing.module';
import {AdminRoutingModule} from './admin/admin-routing.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { UserlistComponent } from './userlist/userlist.component';
console.warn("hello app module  ")

@NgModule({
  declarations: [
    AppComponent,
    AdminlistComponent,
    UserlistComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserRoutingModule,
    AdminRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
