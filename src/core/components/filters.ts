/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Component from '../templates/component';
import Searchbar from './searchbar';
import Category from './category';
import Brand from './brand';
import Price from './price';
import Stock from './stock';

class Filters extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  render() {
    const searchbar = new Searchbar('input', 'searchbar').render();
    const category = new Category('ul', 'category filters__item').render();
    const brand = new Brand('ul', 'brand filters__item').render();
    const price = new Price('div', 'price filters__item').render();
    const stock = new Stock('div', 'amount filters__item').render();

    this.component.append(searchbar);
    this.component.append(category);
    this.component.append(brand);
    this.component.append(price);
    this.component.append(stock);

    return this.component;
  }
}

export default Filters;
