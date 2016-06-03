import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'new-food',
  //inputs:
  outputs: ['onSubmitNewFood'],
  templateUrl: 'app/newfoodcomponent.html'
})

export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor() {
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userName: HTMLInputElement, userDetail: HTMLInputElement, userCal: HTMLInputElement) {
    var convertedCal: number = parseFloat(userCal.value);
    var newFood = new Food(userName.value, userDetail.value, convertedCal);
    this.onSubmitNewFood.emit(newFood);
  }
}
