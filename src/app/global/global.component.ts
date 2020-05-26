import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {
  public indexPage = 0
  
  tab_nav = [
    {path: "home", name: "Home"},
    {path:"skills", name:"My Skills"},
    {path:"project", name:"Projects"},
    {path:"contact", name:"Contact"}
  ]

  setIndexPage(name){
    this.tab_nav.forEach(element => {
      if ( name === element.path ){
        this.indexPage = this.tab_nav.indexOf(element)
      }
    })
  }
  getIndexPage(){
    return this.indexPage
  }
  ngOnInit(): void {
  }

}
