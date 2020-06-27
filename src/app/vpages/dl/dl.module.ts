import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandListComponent } from './demand_list/demand_list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [DemandListComponent],
  imports: [
    SharedModule,
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild([{ path: '', component: DemandListComponent }]),
  ],
})
export class DlModule {}
