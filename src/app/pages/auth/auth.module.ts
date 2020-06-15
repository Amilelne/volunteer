import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'sign-in', component: SigninComponent },
      { path: 'sign-up', component: SignupComponent },
      { path: '', redirectTo: 'sign-in', pathMatch: 'prefix' },
    ]),
  ],
})
export class AuthModule {}
