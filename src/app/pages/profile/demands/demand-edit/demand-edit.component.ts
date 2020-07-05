import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DemandService } from 'src/app/services/demand.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-demand-edit',
  templateUrl: './demand-edit.component.html',
  styleUrls: ['./demand-edit.component.scss'],
})
export class DemandEditComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private demandService: DemandService,
    private router: Router,
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) {}

  addDemandForm = this.fb.group({
    name: [''],
    phone: [''],
    location: [''],
    deadline: [''],
    description: [''],
    tags: [''],
  });
  userId;
  demandId;
  demand;

  ngOnInit(): void {
    this.userId = AuthService.getUserId();
    this.demandId = this.route.snapshot.paramMap.get('id');
    this.demandService
      .getDemandById(this.demandId)
      .subscribe((data: { tags }) => {
        this.demand = data;
        this.addDemandForm.patchValue({
          name: this.demand.name,
          phone: this.demand.phone,
          location: this.demand.location,
          deadline: this.demand.deadline,
          description: this.demand.description,
          tags: this.demand.tags,
        });
      });
  }

  onSubmit() {
    this.demandService
      .updateDemand(this.demandId, this.addDemandForm.value)
      .subscribe((data) => {
        console.log(data);
      });
    this.router.navigate(['/profile']);
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
