import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NeedsComponent } from './needs.component';

@NgModule({
  declarations: [NeedsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: 'state', component: NeedsComponent }]),
  ],
  exports: [NeedsComponent],
})
export class NeedsModule {}
