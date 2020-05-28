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

  public team_data: any
  constructor( public route: Router, public glb: AppComponent) { 
    this.team_data = [
      {firstname:'Antoine', lastname: 'Besnard', img: this.glb.imageLoad[0].src, link: 'antoine-besnard-10b822145', git: 'AntoineBes', skills: ["Angular", "NodeJS", "Heroku", "Github", "Javascript"]},
      {firstname:'Amine', lastname: 'Jerbouh', img: this.glb.imageLoad[1].src, link: 'jerbouh', git: 'Ajerbouh',skills: ["NodeJS", "SQL", "Php", "Github", "Docker"]},
      {firstname:'Damien', lastname: 'Bouyeure', img: this.glb.imageLoad[2].src, link: 'damien-bouyeure-15a915119', git:'damienbouyeure', skills: ["Php", "NodeJS", "Drupal", "Mysql","Javascript"]},
      {firstname:'Jérémy', lastname: 'Genoud', img: this.glb.imageLoad[3].src, link: 'j%C3%A9r%C3%A9my-genoud-9b3645127', git: 'GenoudJeremy', skills: ['Gestion de Projet', 'NodeJS', 'SQL', 'Angular', 'Javascript']},
    ]
  }
  
  @HostBinding('class.row') 
  @HostBinding('class.m-5')
  @HostBinding('class.app-router_navigate')  


  ngOnInit(): void {
    if (this.glb.imageLoad.length == 0){this.glb.preload()}
    this.team_data = this.team_data
    console.log(this.glb.imageLoad)
  }
  ngAfterViewInit(){
    setTimeout(() => {
      this.glb.setIndexPage(this.route.url.replace('/', ''))
  });
  }
  slideActivate(id){
    $(`.fa-angle-down:not(#arrow_${id})`).removeClass('fa-angle-down').addClass('fa-angle-right')
    if ($(`#arrow_${id}`).hasClass('fa-angle-down')) {
      $(`#arrow_${id}`).removeClass('fa-angle-down')
      $(`#arrow_${id}`).addClass('fa-angle-right')
    } else if
    ($(`#arrow_${id}`).hasClass('fa-angle-right')) {
      $(`#arrow_${id}`).removeClass('fa-angle-right')
      $(`#arrow_${id}`).addClass('fa-angle-down')
    } 

    $(`.hide:not(#${id})`).slideUp('fast')
    $(`#${id}`).slideToggle('fast')
  }
}
