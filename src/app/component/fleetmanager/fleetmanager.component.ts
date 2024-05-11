import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-fleetmanager',
  templateUrl: './fleetmanager.component.html',
  styleUrls: ['./fleetmanager.component.css']
})
export class FleetmanagerComponent {
  constructor(private auth: AuthService, private router: Router, private toastr: ToastrService){}
  isUserConnected!: boolean;
  private subscription!: Subscription;

  

  ngOnInit(){
    if(!this.auth.isUserConnected()){
      
      this.router.navigateByUrl('/login')
      this.toastr.error('Unauthorized!', 'Log In to access this page!');
    }
    this.isUserConnected= this.auth.isUserConnected()
    this.subscription = this.auth.isLoggedIn.subscribe(
      (loggedIn) => {
        this.isUserConnected = loggedIn;
      }
    );
    console.log(this.isUserConnected)
      
 
    
  }

  logOut(){
    this.auth.logout()
    this.isUserConnected= false
    console.log(this.isUserConnected)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
