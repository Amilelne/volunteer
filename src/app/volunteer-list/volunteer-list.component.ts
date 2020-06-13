import { Component, OnInit } from '@angular/core';
import { faUser, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.component.html',
  styleUrls: ['./volunteer-list.component.scss']
})
export class VolunteerListComponent implements OnInit {

  groupList = [1,2,3,4,5]

  faUser = faUser;
  faPhoneAlt = faPhoneAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
