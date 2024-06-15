import { Directive ,HostListener} from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';

import { GoogleAuthProvider } from '@firebase/auth-types';
import firebase from 'firebase/compat/app';

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(private afAuth:AngularFireAuth) { }

  
  signIn(){
this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()); 
  }
  
 
}
