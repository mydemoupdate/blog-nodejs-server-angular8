
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListPostsComponent } from './admin-list-posts/admin-list-posts.component';
import { AdminDetailPostsComponent } from './admin-detail-posts/admin-detail-posts.component';

const adminPostsRoutes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: AdminListPostsComponent},
    {path: 'create', component: AdminDetailPostsComponent},
    {path: 'detail/:id', component: AdminDetailPostsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(adminPostsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminPostsRoutingModule {}
