import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { AdminRoutingModule }       from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component'; 

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  declarations: [

  AdminComponent,

  AdminDashboardComponent,

  AdminHeaderComponent,

  AdminFooterComponent,]
})
export class AdminModule {}