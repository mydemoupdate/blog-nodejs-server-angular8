import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListCategoryComponent } from './admin-list-category/admin-list-category.component';
import { AdminCategoryRoutingModule } from './admin-category-routing.module';
import { AdminDetailCategoryComponent } from './admin-detail-category/admin-detail-category.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from '../../service/category.service';
import { PipeModule } from '../../pipe/pipe.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminListCategoryComponent,
    AdminDetailCategoryComponent,
    
  ],
  imports: [
    CommonModule,
    AdminCategoryRoutingModule,
    HttpClientModule,
    PipeModule,
    FormsModule
  ],
  providers: [
    CategoryService
  ]
})
export class AdminCategoriesModule { }
