import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandListComponent } from './demand-list/demand-list.component';
import { DemandDetailComponent } from './demand-detail/demand-detail.component';
import { ProfileComponent } from './profile.component';
import { Routes, RouterModule } from '@angular/router';

const profileRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
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
  declarations: [DemandListComponent, DemandDetailComponent, ProfileComponent],
  imports: [CommonModule, RouterModule.forChild(profileRoutes)],
})
export class ProfileModule {}
