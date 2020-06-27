import { Component, OnInit } from '@angular/core';
import { DemandService } from 'src/app/services/demand.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-demand-detail',
  templateUrl: './demand-detail.component.html',
  styleUrls: ['./demand-detail.component.scss'],
})
export class DemandDetailComponent implements OnInit {
  userId;
  demand;
  demandId;

  constructor(
    private demandService: DemandService,
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.demandId = this.route.snapshot.paramMap.get('id');
    this.demandService
      .getDemandById(this.demandId)
      .subscribe((data: { tags }) => {
        this.demand = data;
        this.demand.user.avatar.url = '/api' + this.demand.user.avatar.url;
        console.log(data);
        if (data.tags) {
          let tagsKey = Object.keys(data.tags);
          // data = {...data, "tagsKey": tagsKey}
        }
      });

    this.userId = AuthService.getUserId();
  }

  receptDemand() {
    this.demandService
      .updateDemand(this.demandId, { volunteer: this.userId, state: 1 })
      .subscribe((data) => {
        // console.log(data);
      });
    this.profileService.getProfile().subscribe((data: { helps }) => {
      this.demandService
        .receptDemand(this.userId, { helps: [...data.helps, this.demandId] })
        .subscribe((data) => {
          // console.log(data);
          this.router.navigate(['/profile']);
        });
    });
  }
}
