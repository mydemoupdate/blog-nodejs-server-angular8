
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent }  from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: AdminDashboardComponent },
          { path: 'category',
           loadChildren: () => import('./admin-categories/admin-categories.module').then(mod => mod.AdminCategoriesModule)}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/