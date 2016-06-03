import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  templateUrl: 'app/newfoodcomponent.html'
})

export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor() {
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userName: HTMLInputElement, userDetail: HTMLInputElement, userCalories: HTMLInputElement) {
    this.onSubmitNewFood.emit(userName.value, userDetail.value, userCalories.value);
    userName.value = "";
    userDetail.value = "";
    userCalories.value = "";

  }
}
