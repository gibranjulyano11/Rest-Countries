import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface'
@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss']
})
export class CountryTableComponent  {

  @Input() countries:Array<Country> = [];
  @Input() submitted:boolean = false;
}
