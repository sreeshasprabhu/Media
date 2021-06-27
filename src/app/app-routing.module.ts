import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UseruploadComponent } from './userupload/userupload.component';

const routes: Routes = [{path:"",component:HomeComponent},{path:"signup",component:SignupComponent},{path:"login",component:LoginComponent},
{path:"superadmin",component:SuperadminComponent},
{path:"userdashboard",component:UserdashboardComponent},
{path:"userupload",component:UseruploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
