import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeedingComponent } from './needing.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NeedingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: NeedingComponent }]),
  ],
})
export class NeedingModule {}
