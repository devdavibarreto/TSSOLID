// see GitHub history for more]

// press ctrl + space + enter for import automatic

import { Discount } from './discount'; // classe abstrata
import { CartItem } from './interfaces/cart-item';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';

//ctrl + enter go to code of extends
export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem): void {
    this._items.push(item);
  }
  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  // _items é privado da classe
  // Por isso é criado com _, Para uso de também de Get e Setters e para fazer referência dentro da classe e sendo um método público.

  //obtendo items
  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  // Obtendo o total

  total(): number {
    // o + indica que vai ser convertido para number.
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  //TOTAL WITH DISCOUNT
  totalWithDicout(): number {
    return this.discount.calculate(this.total());
  }
  //If it's just a validation you can leave it but if it's more than one I must separate
  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo..');
    this._items.length = 0;
  }
}
