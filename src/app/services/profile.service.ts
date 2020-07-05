import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { tap, filter } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.get('/api/users/me');
  }

  getDemands(){
    return this.http.get('/api/users/me');
  }

  addDemand(userId, demand){
    return this.http.put('/api/users/' + userId, demand);
  }
}
