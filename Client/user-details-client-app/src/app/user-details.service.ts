import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails } from './user-details';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  private baseURL = "http://localhost:8080/api/v1/usersDetails";
  private baseUpdateURL = "http://localhost:8080/api/v1/userDetailsUpdate";

  constructor(private httpClient : HttpClient) { }

  getUserDetailsList() : Observable<UserDetails[]>{
    console.log(this.httpClient.get<UserDetails[]>(`${this.baseURL}`));
    return this.httpClient.get<UserDetails[]>(`${this.baseURL}`);
  }

  createUserDetails(userDetails: UserDetails): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, userDetails);
  }

  getUserDetailsById(id: number): Observable<UserDetails>{
    return this.httpClient.get<UserDetails>(`${this.baseURL}/${id}`);
  }

  updateUser( userDetails: UserDetails): Observable<Object>{
    return this.httpClient.post(`${this.baseUpdateURL}`, userDetails);
  }

  deleteUserDetail(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  deleteUserAddress(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/address/${id}`);
  }

}
