import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http'
import {Observable, throwError} from "rxjs";
import {User} from "../user-auth/user";

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  path="http://localhost:8080/api/"
  constructor(private http:HttpClient ) {}

  /**
   * users(){
   *     return this.http.get(this.path)
   *   }
   */
  public saveUser(user:User) : Observable<User> {
    return this.http.post<User>(this.path + "register",user)
  }

  loginUser(username,password): Observable<Object>{
    let params = new HttpParams().set('username',username).set('password',password)
    return this.http.post(this.path + "login",params)
  }


}
