import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],

  template: `
    <div *ngFor="#currentKeg of kegList" (click)="kegClicked(currentKeg)">
      <h3> {{currentKeg.brand}} </h3>
      <h4>Type: {{currentKeg.name}}</h4>
      <h4>Price: $ {{currentKeg.price}}</h4>
      <h4>ABV: {{currentKeg.abv}}</h4>
      <h4 (click)="kegWasTapped(keg)">Pints Left: {{currentKeg.pintCount}}</h4>
    </div>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  constructor(){
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log('child', clickedKeg);
    this.onKegSelect.emit(clickedKeg);
  }

  // kegWasTapped(tappedKeg: Keg): void {
  //   tappedKeg.pintCount -= 1;
  // }
}

//------AppComponent----------------------
@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
  <div class="container">
    <h1>Kegs on Tap</h1>
    <keg-list
      [kegList]="kegs"
      (onKegSelect)="kegWasSelected($event)">
    </keg-list>
  </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Stout", "Guiness", 6, 4, 124),
      new Keg("Pilsner", "Trumer", 5, 5, 124),
      new Keg("IPA", "Terminal Gravity", 5, 7, 124),
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }
}

//-----------Keg Model--------------
export class Keg {
  constructor(public name: string, public brand: string, public price: number, public abv: number, public pintCount: number) {

  }
}
