import { Component, OnInit } from '@angular/core';
import { faUser, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.scss'],
})
export class DemandComponent implements OnInit {
  faPhoneAlt = faPhoneAlt;
  faUser = faUser;

  groupList = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit(): void {}
}
