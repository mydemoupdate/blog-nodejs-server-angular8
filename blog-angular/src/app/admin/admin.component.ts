import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  activeSibar = false;
  constructor() { }

  ngOnInit() {
  }
  changeSibar(){
    this.activeSibar = ! this.activeSibar;
    console.log(this.activeSibar);
  }
}
