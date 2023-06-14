import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  country: Country | undefined;
  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
  ){}

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry(): void{
    const id = String(this.route.snapshot.paramMap.get('id'));

    this.countryService.getCountryData(id).subscribe(country => this.country = country)
    this.countryService.getCountryTime(id).subscribe(country => this.country = country)
  }
  
}
