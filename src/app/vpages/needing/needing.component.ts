import { Component, OnInit } from '@angular/core';
import { faUser, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { DemandService } from 'src/app/services/demand.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-needing',
  templateUrl: './needing.component.html',
  styleUrls: ['./needing.component.scss'],
})
export class NeedingComponent implements OnInit {
  faPhoneAlt = faPhoneAlt;
  faUser = faUser;

  groupList = [1, 2, 3, 4, 5];v
  needings;

  constructor(private demandService: DemandService) {}

  ngOnInit(): void {
    this.demandService.getDemands().subscribe((data) => {
      this.needings = data;
      for(let item in data){
        if(data[item].tags){
          let tagsKey = Object.keys(data[item].tags);
          data[item] = {...data[item], "tagsKey": tagsKey} 
        }
        console.log(data[item]);
      }
    });
  }
}
