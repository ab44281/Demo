import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  constructor(public _http : HttpClient) { }
  getSocietyUrl='https://betterworld.herokuapp.com/society/society';
  RegisterUrl='https://betterworld.herokuapp.com/society/registerSociety';
  getBuildingUrl='https://betterworld.herokuapp.com/society/registerBuilding';

  registerSociety(societyData){
    return this._http.post(this.RegisterUrl,societyData);

  }
  getSociety(){
    return this._http.get(this.getSocietyUrl);
  }
  registerBuilding(buildData){
    return this._http.post(this.getBuildingUrl,buildData);
  }

}
