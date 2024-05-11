import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './component/client/client.component';
import { AdminComponent } from './component/admin/admin.component';
import { FleetmanagerComponent } from './component/fleetmanager/fleetmanager.component';

const routes: Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'login', component : LoginComponent},
 // {path: 'dashboard', component : DashboardComponent},
  {path: 'register', component : RegisterComponent},
 // {path: 'varify-email', component : VarifyEmailComponent},
  {path: 'forgot-password', component : ForgotPasswordComponent},
  //{path : 'file-upload', component:FileuploadComponent}
  {path:'dashboard',component:DashboardComponent},
  {path:'client',component:ClientComponent},
  {path:'admin',component:AdminComponent},
  {path:'fleetmanager',component:FleetmanagerComponent},

  {path: '', redirectTo:'home', pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
