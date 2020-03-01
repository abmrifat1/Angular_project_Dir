import { IResponse } from './iresponse';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class RegistrationService {
  _url = "http://localhost:3000/user";
  constructor(private _http: HttpClient) {}

  register(userData: User) {
    return this._http.post<any>(this._url, userData);
  }

  getUser():Observable<IResponse<User[]>>{
    return this._http.get<IResponse<User[]>>(this._url);
  }
}
