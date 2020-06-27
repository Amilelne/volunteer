import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HelpsComponent } from './helps.component';
import { HelpListComponent } from './help-list/help-list.component';
import { HelpDetailComponent } from './help-detail/help-detail.component';

@NgModule({
  declarations: [HelpsComponent, HelpListComponent, HelpDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'state/:state', component: HelpListComponent }
    ]),
  ],
  exports:[
    HelpsComponent
  ]
})
export class HelpsModule {}
