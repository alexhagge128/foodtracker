import {Pipe, PipeTransform} from 'angular2/core';
import { Food } from './food.model';

@Pipe({

})
export class CalCount implements PipeTransform {
  transform(input: Food[], args) {
    
  }
}
