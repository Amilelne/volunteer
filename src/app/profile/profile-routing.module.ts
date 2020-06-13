import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { DemandListComponent } from './demand-list/demand-list.component';
import { DemandDetailComponent } from './demand-detail/demand-detail.component';


const profileRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    children:[
      {
        path:'demands',
        component: DemandListComponent
      },
      {
        path: 'demand/:id',
        component: DemandDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
