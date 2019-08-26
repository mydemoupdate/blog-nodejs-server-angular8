import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
@Component({
  selector: 'app-pages-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activeMenu: boolean = false;
  active: string = 'block';

  constructor() {
      this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {


        if(window.innerWidth<767){
          this.active = 'none';
        }else{
          this.active = 'block';
        }
  }

  ngOnInit() {
  }
  openMenu(){
    this.activeMenu = !this.activeMenu;
    this.active = (this.activeMenu)? "block":"none";
  }
}
