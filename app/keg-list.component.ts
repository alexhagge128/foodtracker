import { Component, EventEmitter } from 'angular2/core';
import { KegDisplayComponent } from './keg-display.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegDisplayComponent, EditKegDetailsComponent, NewKegComponent],

  template: `
    <div *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)">
      <h3> {{currentKeg.brand}} </h3>
      <h4>Type: {{currentKeg.name}}</h4>
      <h4>Price: $ {{currentKeg.price}}</h4>
      <h4>ABV: {{currentKeg.abv}}</h4>
      <h4>Pints Left: {{currentKeg.pintCount}}</h4>
    </div>
    <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg-details>
    <new-keg></new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor(){
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }

  // kegWasTapped(tappedKeg: Keg): void {
  //   tappedKeg.pintCount -= 1;
  // }
}
