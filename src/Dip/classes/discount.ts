// as everything is of a family, this classes are together

//ctrl + enter go to code of extends
export abstract class Discount {
  protected discount = 0;
  calculate(price: number): number {
    return price - price * this.discount; // for discount in real number
  }
}

export class FifthPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class NoDiscount extends Discount {}
