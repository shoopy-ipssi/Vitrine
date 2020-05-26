import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor( public route: Router, public glb: AppComponent) { }
 
  ngOnInit(): void {
  }
  ngAfterViewInit(){
    setTimeout(() => {
      this.glb.setIndexPage(this.route.url.replace('/', ''))
  });
  }

}
