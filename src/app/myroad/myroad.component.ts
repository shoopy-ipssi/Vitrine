import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-myroad',
  templateUrl: './myroad.component.html',
  styleUrls: ['./myroad.component.css']
})
export class MyroadComponent implements OnInit {

  constructor( public route: Router, public glb: AppComponent) { }
 
  ngOnInit(): void {
  }
  ngAfterViewInit(){
    setTimeout(() => {
      this.glb.setIndexPage(this.route.url.replace('/', ''))
  });
  }
}
