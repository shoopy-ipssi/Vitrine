import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  tab_rs = [
    {path : 'https://github.com/shoopy-ipssi/', icon: 'github', color: "white"},
  ]
  tab_nav = [
    {path:"team", name:"Notre équipe"},
    {path:"contact", name:"Contact"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
