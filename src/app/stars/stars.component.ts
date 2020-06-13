import { Component, OnInit } from '@angular/core';
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  faStar = faStar;
  max = 5;

  public maxItem: any[];
  public ratedCount: number;

  constructor() {
    this.ratedCount = 4;
   }

  ngOnInit(): void {
    this.maxItem = [];
    for(let i=0;i<this.max;i++){
      this.maxItem.push(i+1);
    }
  }

}
