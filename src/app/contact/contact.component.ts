import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AppComponent } from '../app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  public data_contact: any;
  public dataMail: any;
  public submitted = false;
  public responseMailjet: any;

  public headers = new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
  });
  constructor( public fb: FormBuilder,public route: Router, public glb: AppComponent, public http: HttpClient) {
    this.responseMailjet = false
    this.data_contact = [
      {name: 'Bouyeure', firstname: 'Damien', mail_address: 'damien.bouyeure@gmail.com', job:'Développeur Backend ( MongoDB, Node )', contactable: true},
      {name: 'Besnard', firstname: 'Antoine', mail_address: 'antoine95560@hotmail.Fr', job: 'Développeur Frontend ( Angular, Ionic, Heroku )', contactable: true},
      {name: 'Jerbouh', firstname: 'Amine', mail_address: 'a.jerbouh77420@gmail.com', job: 'Développeur Backend ( MySQL, Node )', contactable: true},
      {name: 'Genoud', firstname: 'Jérémy', mail_address: 'genoudj@hotmail.fr', job:'Chef de Projet / Développeur FullStack', contactable: true}]
    this.dataMail = this.fb.group({
      EmailContact: ['', Validators.required],
      SubjectMail: ['', Validators.required],
      ContentMail: ['', Validators.required],
      MailFrom: ['', [Validators.required, Validators.email]],
    })
  }
  @HostBinding('class.app-router_navigate') 

  sendMail(){
    this.submitted = true;
    let d = this.dataMail.controls
    console.log(d.EmailContact.erros == null && d.SubjectMail.erros == null && d.ContentMail.erros == null && d.MailFrom.erros == null)
    if (d.EmailContact.erros == null && d.SubjectMail.erros == null && d.ContentMail.erros == null && d.MailFrom.erros == null) {
      this.http.post('https://shoopymysql.herokuapp.com/sendMail', this.dataMail.value, {headers: this.headers}).subscribe(res => {
        this.responseMailjet = res
        console.log(this.responseMailjet)
      })
    }
  }
  ngOnInit(): void {
    this.data_contact.forEach(element => {
      if (!element.contactable){ this.data_contact.splice(this.data_contact.indexOf(element), 1) }
    });
  }
  ngAfterViewInit(){
    setTimeout(() => {
      this.glb.setIndexPage(this.route.url.replace('/', ''))
  });
  }

}
