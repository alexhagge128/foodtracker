import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
  template: `
  <div *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)">
    <h3> {{currentKeg.brand}} </h3>
    <h4>Type: {{currentKeg.name}}</h4>
    <h4>Price: $ {{currentKeg.price}}</h4>
    <h4>ABV: {{currentKeg.abv}}</h4>
    <h4>Pints Left: {{currentKeg.pintCount}}</h4>
  </div>
  `
})
export class KegDisplayComponent {
  public keg: Keg;
}
