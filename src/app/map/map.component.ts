import { Component } from '@angular/core';
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
  countryData: any = [];
  countryTime: any = [];
  countries = COUNTRIES;
  selectedCountry?: string;

  onSelect(country: string): void {
    //Function used to declare the selection of a country
    this.selectedCountry = country;
    this.countryService.getCountryData(country).subscribe((response: any[]) => {this.countryData = response[1]})
    this.countryService.getCountryTime(country).subscribe((response: any[]) => {this.countryTime = response, console.log(this.countryTime)})
  }

}
