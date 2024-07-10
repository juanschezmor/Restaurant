import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/';
  }
  public findAll() {
    return this.http.get<User[]>(this.usersUrl + 'all-users');
  }
  public login(email: string, password: string) {
    const loginUrl = `${this.usersUrl}login?email=${email}&password=${password}`;
    return this.http.get<number>(loginUrl);
  }
  //register function
  public register(user: User) {
    return this.http.post<User>(this.usersUrl + 'register', user);
  }
}
