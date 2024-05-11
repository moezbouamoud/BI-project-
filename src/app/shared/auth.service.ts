import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'
import { Router } from '@angular/router';
import { multiFactor } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  // login method
  login(email : string, password : string) {
    console.log("test1")
    console.log('email: '+email+' pwd : '+password);
    
    this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
      console.log("test2")
      //console.log(res)
      let u= res.user?.multiFactor
      const us= 'user'
      //const userConnected= res.user?.multiFactor[ us as keyof typeof multiFactor]
      console.log(res.user?.multiFactor[ us as keyof typeof multiFactor]['email']);
      localStorage.setItem('token','true');
      this.loggedIn.next(true);

        //
       
        if(res.user) {
          if(res.user?.multiFactor[ us as keyof typeof multiFactor]['email'] == "sayari@gmail.com")
            {
              this.router.navigate(['dashboard']);
            }
           else if(res.user?.multiFactor[ us as keyof typeof multiFactor]['email'] == "eya@gmail.com")
            {
              this.router.navigate(['client']); //
            } 
            else if(res.user?.multiFactor[ us as keyof typeof multiFactor]['email'] == "moezb@gmail.com")
              {
                this.router.navigate(['fleetmanager']); //
              } 
        
            if(res.user?.multiFactor[ us as keyof typeof multiFactor]['email'] == "admin@gmail.com")
              {
                this.router.navigate(['admin']); //sahit
              }
        } else {
          this.router.navigate(['/home']);
        }
        //get.auth()

    }, err => {
        alert(err.message);
        this.router.navigate(['/login']);
    })
  }
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  isUserConnected(): boolean{
    return localStorage.getItem('token')? true : false
  }
  // register method
  register(email : string, password : string) {
    console.log('email: '+email+' pwd : '+password);
    this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
      console.log("test3")
      alert('Registration Successful');
      this.sendEmailForVarification(res.user);
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  // sign out
  logout() {
    this.fireauth.signOut().then( () => {
      this.loggedIn.next(false);
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }

  // forgot password
  forgotPassword(email : string) {
      this.fireauth.sendPasswordResetEmail(email).then(() => {
        this.router.navigate(['/varify-email']);
      }, err => {
        alert('Something went wrong');
      })
  }

  // email varification
  sendEmailForVarification(user : any) {
    console.log(user);
    this.router.navigate(['/dashboard']);
    /*user.sendEmailVerification().then((res : any) => {
      this.router.navigate(['/varify-email']);
    }, (err : any) => {
      alert('Something went wrong. Not able to send mail to your email.')
    })*/
  }

  //sign in with google
  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {
      localStorage.setItem('token',JSON.stringify(res.user?.uid));

      this.router.navigate(['/dashboard']);
      

    }, err => {
      alert(err.message);
    })
  }

}
