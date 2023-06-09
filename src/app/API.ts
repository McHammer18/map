import { Country } from "./country";
import { Time } from "@angular/common";

export const COUNTRIES: Country[] = [
  { id: 'US', name: 'United States', capitol: 'Washington D.C.',
    region: 'North America', incomelvl: 'Medium', population: '200,000,000'},
  { id: 'AG', name: 'Argentina', capitol: 'Buenos Aires',
  region: 'South America', incomelvl: 'Medium', population: '20,000,000' }
];

//  async getData(country) {
//Call to API's to store the data
  //const worldUrl=`http://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?`
  //const timeUrl=`https://timezone.abstractapi.com/v1/current_time/?api_key=dd90f55b7b444214b28e396995bf1aec&location=${country}`

  //const worldRes=await fetch(worldUrl)
  //const timeRes=await fetch(timeUrl)

  //worldData=await.worldRes.json()
  //world=worldData.

  //timeData=await.timeRes.json()
  //time=timeData.datatime
  
//}