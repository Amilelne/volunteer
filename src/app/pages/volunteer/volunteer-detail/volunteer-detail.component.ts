import { Component, OnInit } from '@angular/core';
import { VolunteerService } from 'src/app/services/volunteer.service';
import { faUser, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-volunteer-detail',
  templateUrl: './volunteer-detail.component.html',
  styleUrls: ['./volunteer-detail.component.scss']
})
export class VolunteerDetailComponent implements OnInit {
  faUser = faUser;
  faPhoneAlt = faPhoneAlt;
  
  group;

  constructor(private volunteerService: VolunteerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.volunteerService.getVGroupById(id).subscribe(data=>{
      this.group = data;
      console.log(data);
    })
  }

}
