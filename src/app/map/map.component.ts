import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { COUNTRIES } from '../mock-countries';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{

  constructor(private countryService: CountryService) { }
  countries = COUNTRIES;
  selectedCountry?: Country;

  onSelect(country: Country): void {
    //Function used to declare the selection of a country
    this.selectedCountry = country;
  }

  ngOnInit(): void {
    //Initiate a list of the countries to be selected
    this.getCountries();
  }

  getCountries(): void {
    //Grab countries from the Service
    this.countryService.getCountries()
    .subscribe(countries => this.countries = countries);
  }

}
