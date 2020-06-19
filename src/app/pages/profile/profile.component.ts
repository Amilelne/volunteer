import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

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
      this.user = data
      this.user.avatar.url = '/api'+this.user.avatar.url;
    })
  }


}
