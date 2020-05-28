import { Component, OnInit, Renderer2 } from '@angular/core';
import * as Alb from 'angular-loading-bar';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  implements OnInit {
  
  public showOverlay = true;
  title = "Portfolio"

  
  tab_nav = [
    {path: "", name: "Home"},
    {path:"team", name:"Our Team"},
    {path:"contact", name:"Contact"}
  ]
  public isLoader: boolean
  public imageLoad = []
  public indexPage = 0
  public previousPage = this.tab_nav.length - 1
  public nextPage = 1
  constructor(private renderer: Renderer2, private router: Router){
    this.isLoader = true;
  }
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
  preload(){
    let img = [ 'default','AJ', 'DB', 'JG']

    img.forEach(item => {
      this.imageLoad[img.indexOf(item)] = new Image()
      this.imageLoad[img.indexOf(item)].src = '../assets/'+item+'.jpg'
    })
  }
  ngOnInit(): void {
    this.preload()
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.showOverlay = false
    }, 3000);
  }
}
