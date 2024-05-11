import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isUserConnected!: boolean
  private subscription!: Subscription;

  constructor(private auth: AuthService, private router: Router){}
  ngOnInit(){
    this.isUserConnected= this.auth.isUserConnected()
    this.subscription = this.auth.isLoggedIn.subscribe(
      (loggedIn) => {
        this.isUserConnected = loggedIn;
      }
    );
  }
  logOut(){
    this.auth.logout()
    this.isUserConnected= false
    this.router.navigateByUrl("/login")
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
