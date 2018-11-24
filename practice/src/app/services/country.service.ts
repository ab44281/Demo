import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country';
import { State } from '../models/state';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(public _http: HttpClient) { }
  uri = 'https://betterworld.herokuapp.com/society/society';

  getSociety() {
    return this._http.get(this.uri);
  }

  getCountries() {
    return [
      // new Country(1, 'United States'),
      // new Country(2, 'India'),
      // new Country(3, 'Australia'),
      // new Country(4, 'New Zealand'),
      // new Country(5, 'South Africa'),
      // new Country(6, 'United Kingdom')
      new Country(1, 'India'),
      new Country (2, 'USA'),
      new Country(3, 'Australia')
    ];
  }

  getStates() {
    return [
      // new State(1, 1, 'Alabama'),
      // new State(2, 1, 'Alaska'),
      // new State(3, 1, 'Arizona'),
      // new State(5, 1, 'Arkansas'),
      // new State(6, 1, 'California'),
      // new State(7, 1, 'Colorado'),
      // new State(8, 1, 'Connecticut'),
      // new State(9, 1, 'Delaware'),
      // new State(10, 1, 'Florida'),
      // new State(11, 1, 'Georgia'),
      // new State(12, 1, 'Hawaii'),
      // new State(13, 1, 'Idaho'),
      // new State(14, 1, 'Illinois'),
      // new State(15, 1, 'Indiana'),
      // new State(16, 2, 'New Delhi'),
      // new State(17, 2, 'Maharashtra'),
      // new State(18, 2, 'Goa'),
      // new State(19, 2, 'Punjab'),
      // new State(20, 2, 'Haryana'),
      // new State(21, 2, 'Uttar Pradesh'),
      // new State(22, 2, 'Rajasthan'),
      // new State(23, 2, 'Andhra Pradesh'),
      // new State(24, 2, 'Jharkhand'),
      // new State(25, 2, 'Madhya Pradesh'),
      // new State(26, 3, 'New South Wales'),
      // new State(27, 3, 'Tasmania'),
      // new State(28, 3, 'Qweensland'),
      // new State(29, 3, 'Western Australia'),
      // new State(30, 3, 'Victoria'),
      // new State(31, 4, 'Auckland'),
      // new State(32, 4, 'Wellington'),
      // new State(33, 4, 'Christchurch'),
      // new State(34, 4, 'Hamilton'),
      // new State(35, 4, 'Napier'),
      // new State(31, 5, 'Eastern Cape'),
      // new State(32, 5, 'Limpopo'),
      // new State(33, 5, 'Mpumalanga'),
      // new State(34, 5, 'North West'),
      // new State(35, 5, 'Northern Cape'),
      // new State(31, 6, 'Herefordshire'),
      // new State(32, 6, 'Durham'),
      // new State(33, 6, 'Manchester'),
      // new State(34, 6, 'South Yorkshire'),
      // new State(35, 6, 'Birmingham')
      new State(1,  1, 'Andhra Pradesh'),
      new State(2,  1, 'Madhya Pradesh' ),
      new State(3,  2, 'San Francisco' ),
      new State(4,  2, 'Los Angeles' ),
      new State(5,  3, 'New South Wales' ),
      new State(6,  3, 'Victoria' ),
    ];
  }

  getCity() {
    return [
      new City(1,  1, 'Guntur' ),
      new City(2,  1, 'Vijayawada' ),
      new City(3,  1, 'Nellore' ),
      new City(4,  1, 'Kadapa' ),
      new City(5,  2, 'Warangal' ),
      new City(6,  2, 'Hyderabad' ),
      new City(7,  2, 'Karimnagar' ),
      new City(8,  2, 'Kadapa' ),
      new City(9,  3, 'SOMA' ),
      new City(10,  3, 'Richmond' ),
      new City(11,  3, 'Sunset' ),
      new City(12,  4, 'Burbank' ),
      new City(13,  4, 'Hollywood' ),
      new City(14,  5, 'Sunset' ),
      new City(15,  5, 'Burbank' ),
      new City(16,  5, 'Hollywood' ),
      new City(17,  6, 'Benalla' ),
      new City(18,  6, 'Melbourne' ),
    ];
  }
}
