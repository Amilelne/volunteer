import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerListComponent } from './volunteer-list/volunteer-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VolunteerDetailComponent } from './volunteer-detail/volunteer-detail.component';

@NgModule({
  declarations: [VolunteerListComponent, VolunteerDetailComponent],
  imports: [
    SharedModule,
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild([
      { path: ':id', component: VolunteerDetailComponent },
      { path: '', component: VolunteerListComponent },
    ]),
  ],
})
export class VolunteerModule {}
