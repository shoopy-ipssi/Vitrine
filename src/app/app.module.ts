import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GlobalComponent } from './global/global.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    GlobalComponent,
    MentionsLegalesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'home', redirectTo: ''},
      { path: '' , component: HomeComponent, data: {state: 'home'}},
      { path: 'team' , component: TeamComponent, data: {state: 'team'}},
      { path: 'contact' , component: ContactComponent, data: {state: 'contact'}},
      { path: 'mentions_legales', component: MentionsLegalesComponent},
      { path: '**' , redirectTo: ''}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
