import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { DemandListComponent } from './demand-list/demand-list.component';
import { DemandDetailComponent } from './demand-detail/demand-detail.component';
import { ProfileComponent } from './profile.component';



const profileRoutes: Routes = [
  {path: 'demands', component: DemandListComponent},
  {path: 'demand/:id', component: DemandDetailComponent},
  {path: 'me', component: ProfileComponent}
]
@NgModule({
  declarations: [DemandListComponent, DemandDetailComponent],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
