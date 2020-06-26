import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public static AUTH_TOKEN = 'authToken';
  public static AUTH_USER_ID = 'userId';
  public static AUTH_USER_ROLE = 'userRole';
  constructor(private http: HttpClient) {}

  signin(signinInput) {
    return this.http.post('/api/auth/local', signinInput).pipe(
      tap((data: { jwt, user: {role: {id, type}} }) => {
        AuthService.storeToken(data.jwt);
        AuthService.storeUserId(data.user.role.id);
        AuthService.storeUserRole(data.user.role.type);
      })
    );
  }

  signup(signupInput) {
    return this.http.post('/api/auth/local/register', signupInput);
  }

  logout() {
    localStorage.clear()
  }

  static storeToken(token: string) {
    localStorage.setItem(this.AUTH_TOKEN, token);
  }

  static getToken() {
    return localStorage.getItem(this.AUTH_TOKEN);
  }

  static removeToken() {
    localStorage.removeItem(this.AUTH_TOKEN);
  }

  static storeUserId(userId: string) {
    localStorage.setItem(this.AUTH_USER_ID, userId);
  }

  static getUserId() {
    return localStorage.getItem(this.AUTH_USER_ID);
  }

  static storeUserRole(userRole){
    localStorage.setItem(this.AUTH_USER_ROLE, userRole);
  }

  static getUserRole(){
    console.log(localStorage.getItem(this.AUTH_USER_ROLE))
    return localStorage.getItem(this.AUTH_USER_ROLE);
  }
}
