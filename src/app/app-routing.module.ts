import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'vlist',
    loadChildren: () =>
      import('./pages/volunteer/volunteer.module').then(
        (m) => m.VolunteerModule
      ),
  },
  {
    path: 'demand',
    loadChildren: () =>
      import('./pages/demand/demand.module').then((m) => m.DemandModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: '', redirectTo: 'auth', pathMatch: 'full' 
  },
  {
    path: 'vauth',
    loadChildren: () =>
      import('./vpages/vauth/vauth.module').then((m) => m.VAuthModule),
  },
  {
    path: 'dlist',
    loadChildren: () =>
      import('./vpages/dl/dl.module').then((m) => m.DlModule
      ),
  },
  {
    path: 'needing',
    loadChildren: () =>
      import('./vpages/needing/needing.module').then((m) => m.NeedingModule),
  },
  {
    path: 'vprofile',
    loadChildren: () =>
      import('./vpages/vprofile/vprofile.module').then((m) => m.VProfileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
