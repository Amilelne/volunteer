import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { DemandsComponent } from "./demands/demands.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((data) => {
      console.log(data);
      this.user = data;
      console.log(this.user.avatar)
      if(!this.user.avatar){
        this.user.avatar = {"url": "/uploads/default_3da5d115ea.png" }
      }
      this.user.avatar.url = '/api'+this.user.avatar.url;
    })
  }


}
