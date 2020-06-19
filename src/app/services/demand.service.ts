import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class DemandService {
  constructor(private http: HttpClient) {}

  getDemands() {
    return this.http.get('/api/demands');
  }

  addDemand(demandInput){
    return this.http.post('/api/demands', demandInput)
  }
}
