import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  constructor( public route: Router, public glb: AppComponent) { }
 
  ngOnInit(): void {
  }
  ngAfterViewInit(){
    setTimeout(() => {
      this.glb.setIndexPage(this.route.url.replace('/', ''))
  });
  }
}
