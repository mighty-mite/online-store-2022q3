// отвечает за рендер главной страницы и переход между страницами
import Page from '../../core/templates/page';
import MainPage from '../main/index';
import SingleProductPage from '../single-product/single-product';
import CartPage from '../cart/cart';

export const enum PageIds {
  MainPage = 'main-page',
  SingleProductPage = 'single-product-page',
  CartPage = 'cart-page',
}

class App {
  private static container: HTMLElement = document.querySelector('.main')!;
  // private initialPage: MainPage;

  static renderNewPage(idPage: string) {
    App.container.innerHTML = '';

    let page: Page | null = null;

    if (idPage === PageIds.MainPage) {
      page = new MainPage(idPage, 'shop');
    } else if (idPage === PageIds.SingleProductPage) {
      page = new SingleProductPage(idPage, 'single-product__data');
    } else if ((idPage = PageIds.CartPage)) {
      page = new CartPage(idPage, 'cart');
    }
    if (page) {
      const pageHTML = page.render();
      App.container.append(pageHTML);
    }
  }

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

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
