
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListCategoryComponent } from './admin-list-category/admin-list-category.component';
import { AdminDetailCategoryComponent } from './admin-detail-category/admin-detail-category.component';

const adminCategoryRoutes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: AdminListCategoryComponent},
    {path: 'create', component: AdminDetailCategoryComponent},
    {path: 'detail/:id', component: AdminDetailCategoryComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(adminCategoryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminCategoryRoutingModule {}
