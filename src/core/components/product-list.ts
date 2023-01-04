/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { data } from '../../assets/data/data';
import Product from './product';

export default class ProductList {
  private container: HTMLElement;

  private productsAmount: number;

  private card!: Product;

  constructor(container: HTMLElement) {
    this.container = container;
    this.productsAmount = data.length;
    console.log(this.container);
  }

  public appendToContainer(): HTMLElement {
    for (let i = 0; i < this.productsAmount; i += 1) {
      this.card = new Product(
        data[i].name,
        data[i].amount,
        data[i].brand,
        data[i].color,
        data[i].price,
      );
      this.container.append(this.card.buildCard());
    }

    return this.container;
  }
}
