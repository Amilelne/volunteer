import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.scss'],
})
export class ViewCommentComponent implements OnInit {
  demand = {
    name: 'Driving',
    phone: '12347890',
    location: 'Heaven Street',
    deadline: '13 Mar 2020',
    description: 'Ask for someone to drive me.',
    comment: 'GOOD service!!',
  };
  demands = [1, 2, 3];

  constructor() {}

  ngOnInit(): void {}
}
