import {Component, EventEmitter} from 'angular2/core';
import { Food } from './food.model';

@Component  ({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
  <div class="food-form">
    <h3>Add a Meal</h3>
      <input placeholder="New Food" class="col-sm-8 input-lg food-form" #newFood/>
      <br>
      <input placeholder="Notes" class="col-sm-8 input-lg food-form" #newDescription/>
      <br>
      <input placeholder="Calories" class="col-sm-8 input-lg food-form" #newCalories/>
      <button (click)="addFood(newFood, newDescription, newCalories)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userFood: HTMLInputElement, userDescription: HTMLInputElement, userCalories: HTMLInputElement){
    var newFood = new Food(userFood.value, userDescription.value, parseInt(userCalories.value), 0);
    this.onSubmitNewFood.emit(newFood);
    userFood.value = "";
    userDescription.value = "";
    userCalories.value = "";
  }
}
