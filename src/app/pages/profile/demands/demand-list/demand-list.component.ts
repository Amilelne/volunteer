import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { DemandService } from 'src/app/services/demand.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-demand-list',
  templateUrl: './demand-list.component.html',
  styleUrls: ['./demand-list.component.scss'],
})
export class DemandListComponent implements OnInit {
  demandIds;
  demands = [];

  constructor(
    private profileService: ProfileService,
    private demandService: DemandService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let state = this.route.snapshot.paramMap.get('state');
    this.profileService.getDemands().subscribe((data: { demands }) => {
      this.demandIds = data.demands;
      console.log(data.demands)
      this.demandIds.forEach((id) => {
        this.demandService.getDemandById(id).subscribe((data: { state }) => {
          if (state == '3') {
            this.demands.push(data);
          } else {
            if (data.state == state) {
              this.demands.push(data);
            }
          }
        });
      });
    });
  }
}
