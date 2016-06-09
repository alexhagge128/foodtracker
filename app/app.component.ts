import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';
//App-component
@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <food-list [foodList]="foods" (onFoodSelect)="foodWasSelected($event)"></food-list>
    </div>
  `
})
export class AppComponent {
  public foods: Food[];
  constructor() {
   this.foods = [
      new Food("Cheeseburger", "Because I need it!", 400, 0),
      new Food("French Fries", "You need these with a burger!", 200, 1),
      new Food("Milkshake", "It's too late..", 100, 2)
    ];
  }
  foodWasSelected(clickedFood: Food): void {
    console.log("parent", clickedFood);
  }
}
