import Page from "../../core/templates/page";
import Filters from "../../core/components/filters";
import Goods from "../../core/components/goods";
import Promo from "../../core/components/promo";

class MainPage extends Page {
  constructor(id: string, className: string) {
    super(id, className);
  }

  render() {
    const wrapper = this.createWrapper("shop__wrapper");
    const mobileSelect = this.createWrapper("shop__select-mobile");
    const promo = new Promo("section", "promo").render();
    const filters = new Filters("div", "filters shop__filters").render();
    const goods = new Goods("div", "goods").render();

    wrapper.append(mobileSelect, filters, goods);

    this.container.append(promo);
    this.container.append(wrapper);
    return this.container;
  }
}

export default MainPage;
