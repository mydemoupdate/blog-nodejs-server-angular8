import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-admin-detail-category',
  templateUrl: './admin-detail-category.component.html',
  styleUrls: ['./admin-detail-category.component.css']
})
export class AdminDetailCategoryComponent implements OnInit {
  category = new Category();
  constructor(private categoryService: CategoryService,
    private location: Location,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service
    if(id){
      this.categoryService.getById(id).subscribe(data => {
        this.category = data;
        this.category.id = id;
      })
    }
  }


  add(): void {
    this.category = new Category();
  }

  save() {
    if(this.category.id){
      this.categoryService.save(this.category).subscribe(
        res => {
          this.toastr.success('You are update It Successfully!');
        }, error => {
          this.toastr.error('You are update failure!')
        })
    }else{
      this.categoryService.save(this.category).subscribe(
        res => {
          this.toastr.success('You are add new It Successfully!');
          this.category = new Category();
        },error=>{
          this.toastr.error('You are add new failure!')
        })
    }
  }
  back() {
    this.location.back();
  }

}
