import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Kegs on Tap</h1>
      <div *ngFor="#keg of kegs">
        <h3> {{keg.brand}} </h3>
        <h4>Type: {{keg.name}}</h4>
        <h4>Price: $ {{keg.price}}</h4>
        <h4>ABV: {{keg.abv}}</h4>
        <h4>Pints Left: {{keg.pintCount}}</h4>
      </div>
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
}

//------------------------

export class Keg {
  constructor(public name: string, public brand: string, public price: number, public abv: number, public pintCount: number) {

  }
}
