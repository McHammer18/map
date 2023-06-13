import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,  of} from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private HTTP: HttpClient) { }
  private worldUrl=`http://api.worldbank.org/v2/country/`;
  private timeUrl=`https://timezone.abstractapi.com/v1/current_time/?api_key=dd90f55b7b444214b28e396995bf1aec&location=`;

  getCountryData(id: string): Observable<any>{
    //Call to API's to store the data
    return this.HTTP.get(this.worldUrl + id + '?format=json');
  }

  getCountryTime(id: string): Observable<any>{
    return this.HTTP.get(this.timeUrl + id);

  }
}
