import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewCommentComponent } from './view-comment/view-comment.component';



@NgModule({
  declarations: [CommentsComponent, ViewCommentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CommentsModule { }
