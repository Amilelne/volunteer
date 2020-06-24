import { Component, OnInit } from '@angular/core';
import { faUser, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { VolunteerService } from 'src/app/services/volunteer.service';

@Component({
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.component.html',
  styleUrls: ['./volunteer-list.component.scss']
})
export class VolunteerListComponent implements OnInit {

  vgroups;

  groupList = [1,2,3,4,5]

  faUser = faUser;
  faPhoneAlt = faPhoneAlt;

  constructor(private volunteerService: VolunteerService) {}

  ngOnInit(): void {
    this.volunteerService.getVGroups().subscribe((data) => {
      this.vgroups = data;
      console.log(data);
    });
  }


}
