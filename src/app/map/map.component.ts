import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { COUNTRIES } from '../countries';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent{

  constructor(private countryService:CountryService) {}

  //constructor(private countryService: CountryService) { }
  countries = COUNTRIES;
  selectedCountry?: string;

  onSelect(country: string): void {
    //Function used to declare the selection of a country
    this.selectedCountry = country;
    this.countryService.getCountryData(country).subscribe(response => {console.log(response)})
    this.countryService.getCountryTime(country).subscribe(response => {console.log(response)})
  }

  //ngOnInit(): void {
    //Initiate a list of the countries to be selected
  //  this.getCountries();
  //}

}
