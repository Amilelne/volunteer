import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VolunteerService {
  constructor(private http: HttpClient) {}

  getVGroups() {
    return this.http.get('/api/vgroups');
  }

  getVGroupById(id){
    return this.http.get('/api/vgroups/'+id);
  }

  getVneeds(){
      return this.http.get('/api/vneeds');
  }
}
