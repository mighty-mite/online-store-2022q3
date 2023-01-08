/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Page from '../../core/templates/page';
import Filters from '../../core/components/filters';
import Goods from '../../core/components/goods';
import Promo from '../../core/components/promo';
// import ProductList from '../../core/components/product-list';
import Filter from '../../core/filter';
import { data } from '../../assets/data/data';
import Product from '../../core/components/product';
import * as noUiSlider from '../../../node_modules/nouislider/dist/nouislider';

class MainPage extends Page {
  // eslint-disable-next-line no-useless-constructor
  constructor(id: string, className: string) {
    super(id, className);
  }

  public filter = new Filter();

  public obj = {
    element: false,
    toy: false,
    hero: false,
    decks: false,
    wheels: false,
    trucks: false,
    helmets: false,
    minPrice: 20,
    maxPrice: 80,
    minAmount: 3,
    maxAmount: 8,
  };

  showCards(wrapper: HTMLElement) {
    // eslint-disable-next-line no-param-reassign
    wrapper.innerHTML = '';
    // eslint-disable-next-line max-len
    const arr1 = this.filter.filterBrands(this.obj.element, this.obj.toy, this.obj.hero, data);
    // eslint-disable-next-line max-len
    const arr2 = this.filter.filterCategories(this.obj.decks, this.obj.wheels, this.obj.trucks, this.obj.helmets, arr1);
    const arr3 = this.filter.filterPrice(this.obj.minPrice, this.obj.maxPrice, arr2);
    const arr4 = this.filter.filterAmount(this.obj.minAmount, this.obj.maxAmount, arr3);
    if (arr4.length === 0) {
      wrapper.append('Sorry, no such item!');
    }
    arr4.forEach((el) => {
      const card = new Product(el.num, el.name, el.amount, el.brand, el.color, el.price);
      wrapper.append(card.buildCard());
    });
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

    this.showCards(productListContainer);
    const toyInput = filters.querySelector('#toy-machine')!;
    const elementInput = filters.querySelector('#element')!;
    const heroInput = filters.querySelector('#anti-hero')!;

    const decksInput = filters.querySelector('#decks')!;
    const wheelsInput = filters.querySelector('#wheels')!;
    const trucksInput = filters.querySelector('#trucks')!;
    const helmetsInput = filters.querySelector('#helmets')!;

    const priceSlider = filters.querySelector('#priceSlider') as noUiSlider.target;
    const amountSlider = filters.querySelector('#amountSlider') as noUiSlider.target;
    // const maxPriceInput = filters.querySelector('#maxPriceInput') as HTMLInputElement;

    if (priceSlider.noUiSlider) {
      priceSlider.noUiSlider.on('update', (values) => {
        const min = values[0];
        const max = values[1];
        this.obj.minPrice = +min;
        this.obj.maxPrice = +max;
        this.showCards(productListContainer);
      });
    }

    if (amountSlider.noUiSlider) {
      amountSlider.noUiSlider.on('update', (values) => {
        const min = values[0];
        const max = values[1];
        this.obj.minAmount = +min;
        this.obj.maxAmount = +max;
        this.showCards(productListContainer);
      });
    }

    decksInput.addEventListener('input', (e) => {
      this.obj.decks = (e.currentTarget! as HTMLInputElement).checked;
      this.showCards(productListContainer);
    });

    wheelsInput.addEventListener('input', (e) => {
      this.obj.wheels = (e.currentTarget! as HTMLInputElement).checked;
      this.showCards(productListContainer);
    });

    trucksInput.addEventListener('input', (e) => {
      this.obj.trucks = (e.currentTarget! as HTMLInputElement).checked;
      this.showCards(productListContainer);
    });

    helmetsInput.addEventListener('input', (e) => {
      this.obj.helmets = (e.currentTarget! as HTMLInputElement).checked;
      this.showCards(productListContainer);
    });

    elementInput.addEventListener('input', (e) => {
      this.obj.element = (e.currentTarget! as HTMLInputElement).checked;
      this.showCards(productListContainer);
    });

    toyInput.addEventListener('input', (e) => {
      this.obj.toy = (e.currentTarget! as HTMLInputElement).checked;
      this.showCards(productListContainer);
    });

    heroInput.addEventListener('input', (e) => {
      this.obj.hero = (e.currentTarget! as HTMLInputElement).checked;
      this.showCards(productListContainer);
    });

    return this.container;
  }
}

export default MainPage;
