import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-email-login',
  templateUrl: './email-login.component.html',
  styleUrls: ['./email-login.component.scss']
})
export class EmailLoginComponent implements OnInit {

  constructor(private afAuth:AngularFireAuth,private fb:FormBuilder) { }
  form!:FormGroup;
  type:'login' | 'signup' | 'reset'='signup';
  loading=false;
  serverMessage?:string;
  ngOnInit() {
    this.form=this.fb.group({
      email:['',[Validators.required,Validators.email,Validators.pattern(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      passwordConfirm:['', Validators.required]
      
    });
  }
  changeType(val:'login' | 'signup' | 'reset'){
    this.type=val;
  }

  get isLogin(){
    return this.type==='login';
  }
  get isSignup(){
    return this.type==='signup';
  }
  get isReset(){
    return this.type==='reset';
  }
  get email(){
    return this.form.get('email');
  }
  get password(){
    return this.form.get('password');
  }
  get passwordConfirm(){
    return this.form.get('passwordConfirm');
  }
  get passwordDoesMatch(){
    if(this.type!=='signup'){
      return true;
    }
    else{
    return this.password?.value===this.passwordConfirm?.value;
    }
  }
  async onSubmit() {
    this.loading = true;

    const email = this.email?.value;
    const password = this.password?.value;

    try {
      if (this.isLogin) {
        await this.afAuth.signInWithEmailAndPassword(email, password);
      }
      if (this.isSignup) {
        await this.afAuth.createUserWithEmailAndPassword(email, password);
      }
      if (this.isReset) {
        await this.afAuth.sendPasswordResetEmail(email);
        this.serverMessage = 'Check your email';
      }
    } catch (err) {
      if (err instanceof Error) {
        this.serverMessage = err.toString();
      } else {
        this.serverMessage = 'An unknown error occurred';
      }    }

    this.loading=false;
  }

}
