import { Component, OnInit } from '@angular/core';
import { DemandService } from 'src/app/services/demand.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demand-detail',
  templateUrl: './demand-detail.component.html',
  styleUrls: ['./demand-detail.component.scss']
})
export class DemandDetailComponent implements OnInit {

  demand;

  constructor(private demandService: DemandService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.demandService.getDemandById(id).subscribe((data:{tags}) => {
      this.demand = data;
      this.demand.user.avatar.url = '/api'+this.demand.user.avatar.url;
      console.log(data)
      if(data.tags){
        let tagsKey = Object.keys(data.tags);
        // data = {...data, "tagsKey": tagsKey}
      }
    });
  }

}
