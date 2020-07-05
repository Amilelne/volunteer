import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemandsComponent } from './demands.component';
import { DemandListComponent } from './demand-list/demand-list.component';
import { DemandDetailComponent } from './demand-detail/demand-detail.component';
import { DemandEditComponent } from './demand-edit/demand-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DemandsComponent, DemandDetailComponent, DemandListComponent, DemandEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'state/:state',
        component: DemandListComponent,
      },
      {
        path: 'detail/:id',
        component: DemandDetailComponent,
      },
      {
        path: 'edit/:id',
        component: DemandEditComponent
      },
    ]),
  ],
  exports: [DemandsComponent],
})
export class MyDemandsModule {}
