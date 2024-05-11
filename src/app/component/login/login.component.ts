import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = '';
  password : string = '';

  constructor(private auth : AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login() {
    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }

    this.auth.login(this.email,this.password);
    
    this.email = '';
    this.password = '';
    this.toastr.success('Logged In!', 'Welcome!');

  }

  signInWithGoogle() {
    this.auth.googleSignIn();
  }
 
}
