import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  demand = {
    name: 'Driving',
    phone: "12347890",
    location: "Heaven Street",
    deadline: '13 Mar 2020',
    description: 'Ask for someone to drive me.'
  };
  addCommentForm = this.fb.group({
    // name: [''],
    description: ['']
  });

  ngOnInit(): void {
    // console.log(this.addCommentForm.value);
    // this.demandService.addDemand(this.addCommentForm.value).subscribe((data) => {
    //   console.log(data);
    // });
  }

}
