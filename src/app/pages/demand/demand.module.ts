import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandComponent } from './demand.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DemandComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DemandComponent }]),
  ],
})
export class DemandModule {}
