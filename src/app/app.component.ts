import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = "Portfolio"

  
  tab_nav = [
    {path: "", name: "Home"},
    {path:"team", name:"Our Team"},
    {path:"project", name:"Projects"},
    {path:"contact", name:"Contact"}
  ]
  public indexPage = 0
  public previousPage = this.tab_nav.length - 1
  public nextPage = 1

  setIndexPage(name){
    this.tab_nav.forEach(element => {
      if ( name === element.path ){
        this.indexPage = this.tab_nav.indexOf(element)
        this.previousPage = (this.indexPage - 1 + this.tab_nav.length) % this.tab_nav.length
        this.nextPage = (this.indexPage + 1) % this.tab_nav.length
      }
    })
  }
  getIndexPage(){
    this.ngOnInit()
    return this.indexPage
  }
  ngOnInit(): void {
  }
}
