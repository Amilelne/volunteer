import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemandsComponent } from './demands.component';
import { DemandListComponent } from './demand-list/demand-list.component';
import { DemandDetailComponent } from './demand-detail/demand-detail.component';

@NgModule({
  declarations: [DemandsComponent, DemandDetailComponent, DemandListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'state/:state',
        component: DemandListComponent,
      },
      {
        path: 'detail/:id',
        component: DemandDetailComponent,
      },
    ]),
  ],
  exports: [DemandsComponent],
})
export class MyDemandsModule {}
