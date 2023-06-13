import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent{
  @Input() country?: any;
  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
  ){}

  getCountry(): void{
    //Grab country data
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.countryService.getCountryData(id)
    .subscribe(country => this.country = country);
  }

}
