import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-admin-list-category',
  templateUrl: './admin-list-category.component.html',
  styleUrls: ['./admin-list-category.component.css']
})
export class AdminListCategoryComponent implements OnInit {
  categories = [];
  searchText = '';
  constructor(private categorySevice: CategoryService) { }

  ngOnInit() {
    this.categorySevice.getAll().subscribe(data=>{
      if (data.type) {
        this.categories = data.items || [];
      }
      console.log(data);
    });
  }

}
