import { Injectable } from '@angular/core';

import {Observable,  of} from 'rxjs';
import { Country } from './country';
import { COUNTRIES } from './mock-countries';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor() { }

  getCountries(): Observable<Country[]>{
    //Function to collect country data from the API
    const countries = of(COUNTRIES);
    return countries;
  }

  getCountry(id: string): Observable<Country>{
    //function to grab the current selected country data to present in the details column
    const country = COUNTRIES.find(c => c.id === id)!;
    return of(country);
  }
}
