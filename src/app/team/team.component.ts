import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public team_data = [
    {firstname:'Antoine', lastname: 'Besnard', img: '', link: 'antoine-besnard-10b822145', git: 'AntoineBes', skills: []},
    {firstname:'Amine', lastname: 'Jerbouh', img: 'AJ', link: 'jerbouh', git: 'Ajerbouh',skills: []},
    {firstname:'Damien', lastname: 'Bouyeure', img: 'DB', link: 'damien-bouyeure-15a915119', git:'damienbouyeure', skills: []},
    {firstname:'Jérémy', lastname: 'Genoud', img: 'JG', link: 'j%C3%A9r%C3%A9my-genoud-9b3645127', git: 'GenoudJeremy', skills: []},
  ]

  constructor( public route: Router, public glb: AppComponent) { }
  @HostBinding('class.row') 
  @HostBinding('class.m-5') 


  ngOnInit(): void {
  }
  ngAfterViewInit(){
    setTimeout(() => {
      this.glb.setIndexPage(this.route.url.replace('/', ''))
  });
  }
  slideActivate(id){
    $(`#${id}`).slideToggle('slow')
  }
}
