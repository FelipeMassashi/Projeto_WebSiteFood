import { Food } from './Food';

export class CartItem{

  constructor(food: Food){
    this.food = food;
    this.getPrice();
  }

  food: Food;
  quantity: number = 1;

  getPrice(): number{
    return this.food.price * this.quantity;
  }
}
