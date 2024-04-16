import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {UserRoutingModule} from './users/user-routing.module';
import {AdminRoutingModule} from './admin/admin-routing.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
   
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
