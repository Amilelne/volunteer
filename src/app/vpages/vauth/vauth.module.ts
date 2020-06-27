import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VSigninComponent } from './vsignin/vsignin.component';
import { VSignupComponent } from './vsignup/vsignup.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [VSigninComponent, VSignupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'vsign-in', component: VSigninComponent },
      { path: 'vsign-up', component: VSignupComponent },
      { path: '', redirectTo: 'vsign-in', pathMatch: 'prefix' },
    ]),
  ],
})
export class VAuthModule {}
