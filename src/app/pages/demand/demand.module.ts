import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandComponent } from './demand.component';
import { RouterModule } from '@angular/router';
import { AddDemandComponent } from './add-demand/add-demand.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DemandComponent, AddDemandComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: DemandComponent },
      { path: 'add', component: AddDemandComponent },
    ]),
  ],
})
export class DemandModule {}
