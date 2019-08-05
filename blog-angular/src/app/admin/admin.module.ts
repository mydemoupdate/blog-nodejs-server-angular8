import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { AdminRoutingModule }       from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [

  AdminComponent,

  AdminDashboardComponent]
})
export class AdminModule {}