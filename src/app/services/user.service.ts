import { Injectable, signal } from '@angular/core';
import { User, UserList } from '../models/users.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userlistURL = 'https://api.escuelajs.co/api/v1/users';
  user = signal<User>({ name: '', email: '' });
  saveUser(user: User) {
    this.user.set({ ...user });
  }

  constructor(private http: HttpClient) {}

  getUser(): Observable<UserList[]> {
    return this.http.get<UserList[]>(`${this.userlistURL}`);
  }
}
