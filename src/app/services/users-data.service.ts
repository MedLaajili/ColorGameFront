import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {Observable, throwError} from "rxjs";
import {User} from "../user-auth/user";

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  path="http://localhost:9000/api/user/save"
  constructor(private http:HttpClient) {}

  /**
   * users(){
   *     return this.http.get(this.path)
   *   }
   */
  public saveUser(user:User) : Observable<User> {
    return this.http.post<User>(this.path,user)
  }



}
