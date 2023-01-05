/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Page from '../../core/templates/page';
import Filters from '../../core/components/filters';
import Goods from '../../core/components/goods';
import Promo from '../../core/components/promo';
import ProductList from '../../core/components/product-list';

class MainPage extends Page {
  // eslint-disable-next-line no-useless-constructor
  constructor(id: string, className: string) {
    super(id, className);
  }

  render() {
    const wrapper = this.createWrapper('shop__wrapper');
    const mobileSelect = this.createWrapper('shop__select-mobile');
    const promo = new Promo('section', 'promo').render();
    const filters = new Filters('div', 'filters shop__filters').render();
    const goods = new Goods('div', 'goods').render();

    wrapper.append(mobileSelect, filters, goods);

    this.container.append(promo);
    this.container.append(wrapper);

    const productListContainer: HTMLElement = goods.querySelector('.goods__wrapper')!;
    const cards = new ProductList(productListContainer);
    cards.appendToContainer();

    return this.container;
  }
}

export default MainPage;
