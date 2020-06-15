import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class DemandService{
    constructor(private http:HttpClient){}

    getProfile(){
        let response = this.http.get('http://localhost:1337/users');
        response.subscribe((data) => {
          console.log(data)
        })
      }
}