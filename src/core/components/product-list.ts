/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { data } from '../../assets/data/data';
import Product from './product';
// import Filter from '../filter';

export default class ProductList {
  // private container: HTMLElement;

  private productsAmount: number;

  private card!: Product;

  constructor() {
    // this.container = container;
    this.productsAmount = data.length;
    // console.log(this.container);
  }

  public appendToContainer(): Product[] {
    const res = [];
    for (let i = 0; i < this.productsAmount; i += 1) {
      this.card = new Product(
        data[i].num,
        data[i].name,
        data[i].amount,
        data[i].brand,
        data[i].color,
        data[i].price,
      );
      res.push(this.card);
      // this.container.append(this.card.buildCard());
    }
    return res;
    // return this.container;
  }
}
