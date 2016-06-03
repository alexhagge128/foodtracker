import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'foodlist',
  inputs: ['foods'],
  templateUrl: 'app/foodlist.component.html'

})
export class FoodListComponent {

}
  
