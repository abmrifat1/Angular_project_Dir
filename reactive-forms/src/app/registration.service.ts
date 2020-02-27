import { IResponse } from './iresponse';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User,Sample } from "./user";
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

  getUser():Observable<IResponse<Sample[]>>{
    return this._http.get<IResponse<Sample[]>>(this._url);
  }
}
