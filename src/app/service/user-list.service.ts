import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockUsers } from '../mock/user-list';
import { IUser } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  private apiUrl = 'your_api_url_here'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    // Send an HTTP GET request to fetch the list of users
    //return this.http.get<any[]>(this.apiUrl);
    return of(mockUsers);
  }
}
