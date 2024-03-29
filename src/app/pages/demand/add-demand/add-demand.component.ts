import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DemandService } from 'src/app/services/demand.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-add-demand',
  templateUrl: './add-demand.component.html',
  styleUrls: ['./add-demand.component.scss'],
})
export class AddDemandComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private demandService: DemandService,
    private router: Router,
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

  ngOnInit(): void {
    this.userId = AuthService.getUserId();
  }

  onSubmit() {
    let addDemandInput = {...this.addDemandForm.value, "user": this.userId};
    this.demandService.addDemand(addDemandInput).subscribe((data) => {
      this.profileService.getProfile().subscribe(user => {
        let demands = user['demands'];
        demands.push(data["id"]);
        this.profileService.addDemand(this.userId, {demands: demands}).subscribe(data=>{
          // console.log(data);
        })
      })
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
