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
  @Input() country?: Country;
  //country: Country | undefined;

  //constructor(
    //private route: ActivatedRoute,
    //private countryService: CountryService,
   // private location:Location
  //){}

  //ngOnInit(): void {
    //Initialize Countries
  //  this.getCountry();
 // }

  //getCountry(): void{
    //Grab country data
  //  const id = String(this.route.snapshot.paramMap.get('id'));
  //  this.countryService.getCountry(id)
  //  .subscribe(country => this.country = country);
 // }

}
