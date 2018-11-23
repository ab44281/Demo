import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SocietyService {

  constructor(public _http : HttpClient) { }
  getSocietyUrl='https://betterworld.herokuapp.com/society/society';
  RegisterUrl='https://betterworld.herokuapp.com/society/registerSociety';

  registerSociety(societyData){
    return this._http.post(this.RegisterUrl,societyData);

  }

}
