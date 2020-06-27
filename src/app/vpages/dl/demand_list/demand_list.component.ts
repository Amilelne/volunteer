import { Component, OnInit } from '@angular/core';
import { faUser, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-demand_list',
  templateUrl: './demand_list.component.html',
  styleUrls: ['./demand_list.component.scss']
})
export class DemandListComponent implements OnInit {

  groupList = [1,2,3,4,5]

  faUser = faUser;
  faPhoneAlt = faPhoneAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
