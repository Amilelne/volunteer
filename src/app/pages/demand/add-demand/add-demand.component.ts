import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DemandService } from 'src/app/services/demand.service';

@Component({
  selector: 'app-add-demand',
  templateUrl: './add-demand.component.html',
  styleUrls: ['./add-demand.component.scss'],
})
export class AddDemandComponent implements OnInit {
  constructor(private fb: FormBuilder, private demandService: DemandService) {}

  addDemandForm = this.fb.group({
    name: [''],
    phone: [''],
    location: [''],
    deadline: [''],
    description: [''],
    tags: [''],
  });

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.addDemandForm.value);
    this.demandService.addDemand(this.addDemandForm.value).subscribe((data) => {
      console.log(data);
    });
  }

  get name() {
    return this.addDemandForm.get('name');
  }

  get phone() {
    return this.addDemandForm.get('phone');
  }

  get location() {
    return this.addDemandForm.get('location');
  }

  get deadline() {
    return this.addDemandForm.get('deadline');
  }

  get description() {
    return this.addDemandForm.get('description');
  }
}
