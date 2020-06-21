import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { DemandService } from 'src/app/services/demand.service';

@Component({
  selector: 'app-demand-list',
  templateUrl: './demand-list.component.html',
  styleUrls: ['./demand-list.component.scss'],
})
export class DemandListComponent implements OnInit {
  demandIds;
  demands = [];

  constructor(
    private profileService: ProfileService,
    private demandService: DemandService
  ) {}

  ngOnInit(): void {
    this.profileService.getDemands().subscribe((data: { demands }) => {
      this.demandIds = data.demands;
      this.demandIds.forEach((id) => {
        this.demandService.getDemandById(id).subscribe((data) => {
          this.demands.push(data);
        });
      });
    });
  }
}
