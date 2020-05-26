import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor( public route: Router, public glb: AppComponent) { }
 
  ngOnInit(): void {
  }
  ngAfterViewInit(){
    setTimeout(() => {
      this.glb.setIndexPage(this.route.url.replace('/', ''))
  });
  }
}
