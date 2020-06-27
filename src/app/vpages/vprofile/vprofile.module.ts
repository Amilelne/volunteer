import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandListComponent } from './demand-list/demand-list.component';
import { DemandDetailComponent } from './demand-detail/demand-detail.component';
import { VProfileComponent } from './vprofile.component';
import { Routes, RouterModule } from '@angular/router';

const vprofileRoutes: Routes = [
  {
    path: '',
    component: VProfileComponent,
    children: [
      {
        path: 'demands',
        component: DemandListComponent,
      },
      {
        path: 'demand/:id',
        component: DemandDetailComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [DemandListComponent, DemandDetailComponent, VProfileComponent],
  imports: [CommonModule, RouterModule.forChild(vprofileRoutes)],
})
export class VProfileModule {}
