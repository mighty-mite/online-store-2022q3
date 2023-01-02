import Component from "../templates/component";

class Total extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  createSubtotal() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("total__sub");
    const text = document.createElement("span");
    text.classList.add("total__sub-text");
    text.innerHTML = "Subtotal:";
    const value = document.createElement("span");
    value.classList.add("total__sub-value");
    value.innerHTML = "$";
    wrapper.append(text, value);
    return wrapper;
  }

  createShipping() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("total__shipping");
    const text = document.createElement("span");
    text.classList.add("total__shipping-text");
    text.innerHTML = "Shipping fee:";
    const value = document.createElement("span");
    value.classList.add("total__shipping-value");
    value.innerHTML = "$";
    wrapper.append(text, value);
    return wrapper;
  }
  createTotal() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("total__bottom");
    const text = document.createElement("span");
    text.classList.add("total__bottom-text");
    text.innerHTML = "Total: ";
    const value = document.createElement("span");
    value.classList.add("total__bottom-value");
    value.innerHTML = "$";
    wrapper.append(text, value);
    return wrapper;
  }

  createPromoInput() {
    const promo = document.createElement("input");
    promo.classList.add("total__promo");
    promo.setAttribute("placeholder", "Promo code...");
    return promo;
  }

  createBuyBtn() {
    const buyBtn = document.createElement("button");
    buyBtn.classList.add("total__buy");
    buyBtn.innerHTML = "Buy Now";
    return buyBtn;
  }

  render() {
    this.component.append(this.createSubtotal());
    this.component.append(this.createShipping());
    this.component.append(this.createTotal());
    this.component.append(this.createPromoInput());
    this.component.append(this.createBuyBtn());
    return this.component;
  }
}

export default Total;
