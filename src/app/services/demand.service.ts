import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DemandService {
  constructor(private http: HttpClient) {}

  getDemands() {
    return this.http.get('/api/demands');
  }

  addDemand(demandInput) {
    return this.http.post('/api/demands', demandInput);
  }

  getDemandById(id) {
    return this.http.get('/api/demands/' + id);
  }

  updateDemand(id, updateInput) {
    return this.http.put('/api/demands/' + id, updateInput);
  }

  receptDemand(userId, demandInput) {
    return this.http.put('/api/users/' + userId, demandInput);
  }

  deleteDemandById(demandId) {
    return this.http.delete('/api/demands/' + demandId);
  }
}
