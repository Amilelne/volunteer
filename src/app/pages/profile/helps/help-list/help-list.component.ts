import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { DemandService } from 'src/app/services/demand.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-help-list',
  templateUrl: './help-list.component.html',
  styleUrls: ['./help-list.component.scss'],
})
export class HelpListComponent implements OnInit {
  helps = [];

  constructor(
    private profileService: ProfileService,
    private demandService: DemandService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let state = this.route.snapshot.paramMap.get('state');
    this.profileService.getProfile().subscribe((data: { helps }) => {
      let helpsId = data.helps;
      helpsId.forEach((id) => {
        this.demandService.getDemandById(id).subscribe((data: { state }) => {
          console.log(data)
          if (state == '3') {
            this.helps.push(data);
          } else {
            if (data.state == state) {
              this.helps.push(data);
            }
          }
        });
      });
    });
  }
}
