//-----Food---
export class Food {
  public isHealthy: boolean;
  constructor(public name: string, public description: string, public calories: number, public id: number) {
    if (calories <= 500) {
      this.isHealthy = true;
    } else {
      this.isHealthy =  false;
    }

  }
}
