import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerListComponent } from './volunteer-list/volunteer-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [VolunteerListComponent],
  imports: [
    SharedModule,
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild([{ path: '', component: VolunteerListComponent }]),
  ],
})
export class VolunteerModule {}
