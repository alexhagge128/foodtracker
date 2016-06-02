import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';


//-------Edit keg-
@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <div class="keg-form">
    <br>
    <br>
      <h4>Edit Brand: </h4>
      <input [(ngModel)]="keg.brand" class="col-sm-8 input-lg task-form"/>
      <h4>Edit Type: </h4>
      <input [(ngModel)]="keg.name" class="col-sm-8 input-lg task-form"/>
      <h4>Edit Price: $ </h4>
      <input [(ngModel)]="keg.price" class="col-sm-8 input-lg task-form"/>
      <h4>Edit ABV: </h4>
      <input [(ngModel)]="keg.abv" class="col-sm-8 input-lg task-form"/>
  `

})
export class EditKegDetailsComponent {
  public keg: Keg;
}
