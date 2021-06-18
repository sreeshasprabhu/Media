import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SuperadminComponent } from './superadmin/superadmin.component';

const routes: Routes = [{path:"",component:HomeComponent},{path:"signup",component:SignupComponent},{path:"login",component:LoginComponent},
{path:"superadmin",component:SuperadminComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
