import { Component } from 'angular2/core';
import { Food } from './food.model';
import { NewFoodComponent } from './newfoodcomponent';

@Component({
  selector: 'foodlist',
  directives: [NewFoodComponent],
  inputs: ['foods'],
  templateUrl: 'app/foodlist.component.html'

})
export class FoodListComponent {
  public foodList: Food[];

  createFood(newFood: Food): void {
    this.foodList.push(newFood);
  }
}
