import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country';
import { State } from '../../models/state';
import { City } from '../../models/city';
import { Society } from 'src/app/models/society';
import { SocietyService } from 'src/app/services/society.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  selectedCountry = 0;
  selectedState = 0;

  countries: Country[];
  societies: Society[];
  states: State[];
  cities: City[];
  numbers: number[] = [1, 2, 3 ];
  soc = {};

  constructor(private _countryService: CountryService, private _societyService: SocietyService) {
    this.countries = this._countryService.getCountries();
    // this.societies = this._societyService.getSociety();
  }

  onSelectCountry(country_id: number) {
    this.selectedCountry = country_id;
    this.selectedState = 0;
    this.cities = [];
    this.states = this._countryService.getStates().filter((item) => {
      return item.countryId === Number(country_id);
    });
  }

  onSelectState(state_id: number) {
    this.selectedState = state_id;
    this.cities = this._countryService.getCity().filter((item) => {
      return item.stateId === Number(state_id);
    });
  }

  ngOnInit() {
    // this.fetchData();
    this.soc = this._societyService.getSociety().subscribe(data => {
      console.log('we got', data);
      this.soc = data;
    });
  }

  // fetchData() {
  //   this._countryService.getSociety().subscribe((data: Country[]) => {
  //     this.countries = data;
  //     console.log('Data requested ...');
  //     console.log(this.countries);
  //   });
  // }

}
