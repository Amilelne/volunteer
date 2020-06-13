import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VolunteerListComponent } from './volunteer-list/volunteer-list.component';
import { DemandComponent } from './demand/demand.component';

const routes: Routes = [
{
  path: 'signin', 
  component: LoginComponent
},
{
  path: 'signup',
  component: SignupComponent
},
{
  path: 'vlist',
  component: VolunteerListComponent
},
{
  path: 'demand',
  component: DemandComponent
},
{
  path: '',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
