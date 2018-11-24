import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocietyService {

  constructor(public _http: HttpClient) { }

  uri = 'https://betterworld.herokuapp.com/society/society';

  getSociety() {
    return this._http.get(this.uri);
  }
}
