import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-need-list',
  templateUrl: './need-list.component.html',
  styleUrls: ['./need-list.component.scss'],
})
export class NeedListComponent implements OnInit {
  item = {
    name: 'Need Vegetables',
    contact: 'Mr. Li',
    phone: '(021)445445',
    description: 'Need vegetables, potatoes 20 kg, tomatoes 40kg.',
    date: 'Jun 22, 2020',
  };
  groupneeds = [1, 2, 3];

  constructor() {}

  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('id');
    // this.volunteerService.getVGroupById(id).subscribe(data=>{
    //   this.group = data;
    //   console.log(data);
    // })
  }
}
