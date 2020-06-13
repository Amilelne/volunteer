import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'sign-in', component: LoginComponent },
      { path: 'sign-up', component: SignupComponent },
      { path: '', redirectTo: 'sign-in', pathMatch: 'prefix' },
    ]),
  ],
})
export class AuthModule {}
