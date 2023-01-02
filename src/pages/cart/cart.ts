import Total from "../../core/components/total";
import Page from "../../core/templates/page";

class CartPage extends Page {
  constructor(id: string, className: string) {
    super(id, className);
  }

  createCartHead() {
    const cartHead = this.createWrapper("cart__head");
    const item = this.createWrapper("cart__head-item");
    item.innerText = "Item";
    const price = this.createWrapper("cart__head-price");
    price.innerText = "Price";
    const amount = this.createWrapper("cart__head-amount");
    amount.innerText = "Amount";
    const subtotal = this.createWrapper("cart__head-subtotal");
    subtotal.innerText = "Subtotal";
    cartHead.append(item, price, amount, subtotal);
    return cartHead;
  }

  createCartControls() {
    const wrapper = this.createWrapper("cart__controls");
    const shoppingBtn = document.createElement("a");
    shoppingBtn.classList.add("cart__go-shopping-btn");
    shoppingBtn.innerText = "Continue Shopping";
    shoppingBtn.setAttribute("href", "#main-page");

    const clearBtn = document.createElement("button");
    clearBtn.classList.add("cart__clear-btn");
    clearBtn.innerText = "Clear Cart";

    wrapper.append(shoppingBtn, clearBtn);
    return wrapper;
  }

  createItemsContainer() {
    const items = this.createWrapper("items");
    items.innerHTML = "Cart is empty, let's go shopping!";
    return items;
  }

  render() {
    const wrapper = this.createWrapper("cart__center");
    const controls = this.createCartControls();
    const cartHead = this.createCartHead();
    const items = this.createItemsContainer();

    const total = new Total("div", "total").render();
    total.classList.add("cart__total");

    wrapper.append(cartHead);
    wrapper.append(items);
    wrapper.append(controls);
    wrapper.append(total);

    this.container.append(wrapper);
    return this.container;
  }
}

export default CartPage;
