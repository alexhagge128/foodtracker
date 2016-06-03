import { Component } from 'angular2/core';
import { Food } from './food.model';
import { FoodListComponent } from './foodlist.component';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [FoodListComponent]
})
export class AppComponent {
    foods: Food[];

    constructor(){
      this.foods = [
        new foods("Burger", "I neeeed it!", 500),
        new foods("Burger", "I neeeed it!", 500),
        new foods("Burger", "I neeeed it!", 500),
      ]
    }
}
