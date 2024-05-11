import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './component/client/client.component';
import { AdminComponent } from './component/admin/admin.component';
import { FleetmanagerComponent } from './component/fleetmanager/fleetmanager.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ClientComponent,
    AdminComponent,
    FleetmanagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // Add ToastrModule
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
