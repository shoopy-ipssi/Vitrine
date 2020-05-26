import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  tab_rs = [
    {path : 'github.com/GenoudJeremy', icon: 'github', color: "white"},
    {path: 'www.facebook.com/jeremy.genoud1', icon: 'facebook', color: "#4267B2"},
    {path: 'www.linkedin.com/in/j%C3%A9r%C3%A9my-genoud-9b3645127/', icon: 'linkedin', color: '#0077B5'}
  ]
  tab_nav = [
    {path:"team", name:"Our Team"},
    {path:"project", name:"Projects"},
    {path:"contact", name:"Contact"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
