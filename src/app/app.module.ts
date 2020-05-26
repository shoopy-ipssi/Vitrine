import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ProjectComponent } from './project/project.component';
import { MyroadComponent } from './myroad/myroad.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GlobalComponent } from './global/global.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    ProjectComponent,
    MyroadComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    GlobalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', redirectTo: ''},
      { path: '' , component: HomeComponent},
      { path: 'team' , component: TeamComponent},
      { path: 'project' , component: ProjectComponent},
      { path: 'contact' , component: ContactComponent},
      { path: '**' , redirectTo: ''}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
