import {Component} from 'angular2/core';
import {Food} from './.food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
    <div class="food-form">
    <h3>Modify Meal</h3>
      <input [(ngModel)]="food.name" class="col-sm-8 input-lg food-form" placeholder="Modify Food"/>
      <br>
      <input [(ngModel)]="food.description" class="col-sm-8 input-lg food-form" placeholder="What really happened?"/>
      <br>
      <input [(ngModel)]="food.calories" class="col-sm-8 input-lg food-form" placeholder="How about a calorie recount?"/>
    </div>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
