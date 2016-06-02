import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';


@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="task-form">
    <br>
    <button (click)="addKeg(newBrand, newType, newPrice, newABV)">Add Keg</button>
    <br>
    <br>
    <input placeholder="Brand" class="col-sm-8 input-lg" #newBrand>
    <input placeholder="Type" class="col-sm-8 input-lg" #newType>
    <input placeholder="Price" class="col-sm-8 input-lg" #newPrice>
    <input placeholder="ABV" class="col-sm-8 input-lg" #newABV>

  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor() {
    this.onSubmitNewKeg = new EventEmitter();

  }
}
