import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleSigninDirective } from '../google-signin.directive';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers:[GoogleSigninDirective]
})
export class LoginPageComponent implements OnInit {

  constructor(public afAuth:AngularFireAuth,private google:GoogleSigninDirective ) { }

  signIn(){
    this.google.signIn();
  }
  

  ngOnInit(): void {

  }

}
