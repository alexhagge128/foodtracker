import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

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
      new Keg("Stout", "Guinness", 6, 4, 124),
      new Keg("Pilsner", "Trumer", 5, 5, 124),
      new Keg("IPA", "Terminal Gravity", 5, 7, 124),
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }
}
