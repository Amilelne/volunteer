import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarsComponent } from './stars/stars.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [StarsComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [StarsComponent],
})
export class SharedModule {}
