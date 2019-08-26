import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPostsRoutingModule } from './admin-posts-routing.module';
import { AdminListPostsComponent } from './admin-list-posts/admin-list-posts.component';
import { AdminDetailPostsComponent } from './admin-detail-posts/admin-detail-posts.component';



@NgModule({
  declarations: [AdminListPostsComponent, AdminDetailPostsComponent],
  imports: [
    CommonModule,
    AdminPostsRoutingModule
  ]
})
export class AdminPostsModule { }
