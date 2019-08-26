import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  @Output() headerChange = new EventEmitter();
  positionMenu = 0;
  constructor() { }

  ngOnInit() {
  }

 
  openSider() {
    this.headerChange.emit();  
  }

  onSelect(position){
    this.positionMenu = position;
  }
}
