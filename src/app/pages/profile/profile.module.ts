import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandListComponent } from './demand-list/demand-list.component';
import { DemandDetailComponent } from './demand-detail/demand-detail.component';
import { ProfileComponent } from './profile.component';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';

const profileRoutes: Routes = [
  {
    path: 'demands',
    component: DemandListComponent,
  },
  {
    path: 'demand/:id',
    component: DemandDetailComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: '',
    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [
    DemandListComponent,
    DemandDetailComponent,
    ProfileComponent,
    SettingsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(profileRoutes)],
})
export class ProfileModule {}
