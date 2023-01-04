// отвечает за рендер главной страницы и переход между страницами
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Page from '../../core/templates/page';
import MainPage from '../main/index';
import SingleProductPage from '../single-product/single-product';
import CartPage from '../cart/cart';

// export const enum PageIds {
//   MainPage = 'main-page',
//   SingleProductPage = 'single-product-page',
//   CartPage = 'cart-page',
// }

class App {
  private static container: HTMLElement = document.querySelector('.main')!;
  // private initialPage: MainPage;

  static renderNewPage(idPage: string) {
    App.container.innerHTML = '';

    let page: Page | null = null;

    if (idPage === 'main-page') {
      page = new MainPage(idPage, 'shop');
    } else if (idPage === 'single-product-page') {
      page = new SingleProductPage(idPage, 'single-product__data');
    } else if ((idPage === 'cart-page')) {
      page = new CartPage(idPage, 'cart');
    }
    if (page) {
      const pageHTML = page.render();
      App.container.append(pageHTML);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  // eslint-disable-next-line no-useless-constructor
  constructor() {
    // this.initialPage = new MainPage("main-page");
  }

  run() {
    window.location.hash = 'main-page'; // ???????
    App.renderNewPage('main-page');
    this.enableRouteChange();
  }
}
export default App;
