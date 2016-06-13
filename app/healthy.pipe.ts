import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: "healthy",
  pure: false
})
export class HealthyPipe implements PipeTransform {
  transform(input: Food[], args) {

    var healthState = args[0];

    if (healthState === "healthy") {
      return input.filter((food) => {
        return food.isHealthy;
      });
    } else if (healthState === "notHealthy") {
      return input.filter((food) => {
        return !food.isHealthy;
      });
    } else {
      return input;
    }
  }
}
