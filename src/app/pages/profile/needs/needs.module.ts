import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NeedsComponent } from './needs.component';
import { NeedListComponent } from './need-list/need-list.component';

@NgModule({
  declarations: [NeedsComponent, NeedListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'state/:state', component: NeedListComponent },
    ]),
  ],
  exports: [NeedsComponent],
})
export class NeedsModule {}
