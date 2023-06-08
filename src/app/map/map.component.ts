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
    this.selectedCountry = country;
  }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries()
    .subscribe(countries => this.countries = countries);
  }

}
