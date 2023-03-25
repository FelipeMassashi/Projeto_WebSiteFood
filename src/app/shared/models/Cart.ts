import { CartItem } from './CartItem';

export class Cart{

  items: CartItem[] = [];

  getTotalPrice(): number{
    let totalPrice = 0;
    this.items.forEach(item => {
      totalPrice += item.getPrice();
    });

    return totalPrice;
  }


}
