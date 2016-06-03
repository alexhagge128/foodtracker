import { Component } from 'angular2/core';
import { Food } from './food.model';
import { FoodListComponent } from './foodlist.component';
import { NewFoodComponent } from './newfoodcomponent';


@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  templateUrl: 'app/app.component.html',

})
export class AppComponent {
    public foods: Food[];

    constructor(){
      this.foods = [
        new Food("Burger", "I neeeed it!", 500),
        new Food("Fries", "I neeeed it!", 300),
        new Food("Milkshake", "I neeeed it!", 50)
      ]
    }
}
