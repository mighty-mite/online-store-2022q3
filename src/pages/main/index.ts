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
import Sorting from '../../core/sorting';
import Search from '../../core/search';
//import Sort from '../../core/components/sort';

class MainPage extends Page {
  // eslint-disable-next-line no-useless-constructor
  constructor(id: string, className: string) {
    super(id, className);
  }

  public filter = new Filter();
  public sorting = new Sorting();
  public search = new Search();
//  public sortElem = new Sort();

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
    sortType: 'Price ASC',
    searchWorld: ''
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
    const arr5 = this.sorting.sort(arr4, this.obj.sortType);
    const arr6 = this.search.search(arr5, this.obj.searchWorld);
    if (arr6.length === 0) {
      wrapper.append('Sorry, no such item!');
    }
    arr6.forEach((el) => {
      const card = new Product(el.num, el.name, el.amount, el.brand, el.color, el.price, el.rating);
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

    const sortSelection = wrapper.querySelector('.sort__select') as HTMLSelectElement;

    const searchInput = filters.querySelector('.searchbar') as HTMLInputElement;

    const resetBtn = wrapper.querySelector('.goods__reset-btn') as HTMLButtonElement;


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
    
    const cards = Array.from(wrapper.querySelectorAll('.card')) as HTMLElement[];

    cards.forEach((card) => {
      card.addEventListener('click', (e) => {
        const target = e.currentTarget;
        const productChosen = (target as HTMLElement)!.id;
        localStorage.setItem('productChosen', productChosen);
        // console.log('get item', localStorage.getItem('productChosen'));
      });
    });

    sortSelection?.addEventListener('change', (event) =>{
      let eventTarget = event.target as HTMLSelectElement;
      this.obj.sortType = eventTarget.options[eventTarget.selectedIndex].value;
      this.showCards(productListContainer);
    })

    searchInput.addEventListener('input', (event) => {
      const eventTarget = event.target as HTMLSelectElement;
      this.obj.searchWorld = eventTarget.value;
      this.showCards(productListContainer);
    })

    resetBtn.addEventListener('click', () => {
      this.obj.element = false
      this.obj.toy = false
      this.obj.hero = false
      this.obj.decks = false
      this.obj.wheels = false
      this.obj.trucks = false
      this.obj.helmets = false
      this.obj.minPrice = 20
      this.obj.maxPrice = 80
      this.obj.minAmount = 3
      this.obj.maxAmount = 8
      this.obj.sortType = 'Price ASC'
      this.obj.searchWorld = ''
      this.showCards(productListContainer);
      sortSelection.value = this.obj.sortType
    })
    return this.container;
  }
}

export default MainPage;
