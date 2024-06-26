import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learning3';
  constructor(private viewContainer:ViewContainerRef,
    private cfr:ComponentFactoryResolver){}
    async loadAdmin()
    {
      this.viewContainer.clear();
      const {AdminlistComponent}=await import('./adminlist/adminlist.component');
      this.viewContainer.createComponent(
        this.cfr.resolveComponentFactory(AdminlistComponent)
      );

    }
    async loadUser()
    {
      this.viewContainer.clear();
      const {UserlistComponent}=await import('./userlist/userlist.component');
      this.viewContainer.createComponent(
        this.cfr.resolveComponentFactory(UserlistComponent)
      );

    }
}
