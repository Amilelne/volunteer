import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { NeedsModule } from './needs/needs.module';
import { HelpsModule } from './helps/helps.module';
import { MyDemandsModule } from "./demands/demands.module";

const profileRoutes: Routes = [
  {
    path: 'demands',
    loadChildren: () =>
      import('./demands/demands.module').then((m) => m.MyDemandsModule),
  },
  {
    path: 'needs',
    loadChildren: () =>
      import('./needs/needs.module').then((m) => m.NeedsModule),
  },
  {
    path: 'helps',
    loadChildren: () =>
      import('./helps/helps.module').then((m) => m.HelpsModule),
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
    ProfileComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes),
    HelpsModule,
    MyDemandsModule
  ],
})
export class ProfileModule {}
