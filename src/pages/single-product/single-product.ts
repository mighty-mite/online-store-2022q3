import Page from '../../core/templates/page';

class SingleProductPage extends Page {
  constructor(id: string, className: string) {
    super(id, className);
  }

  createImg(imgPath: string) {
    const imageWrapper = this.createWrapper('single-product__img');
    const img = document.createElement('img');
    img.setAttribute('alt', 'product-image');
    img.src = `${imgPath}`;

    imageWrapper.append(img);
    return imageWrapper;
  }

  createInfo() {
    const infoWrapper = this.createWrapper('single-product__info');

    const btnWrapper = this.createWrapper('single-product__cards');

    const addToCartBtn = document.createElement('button');
    addToCartBtn.classList.add('btn-reset', 'add-card');
    addToCartBtn.innerText = 'Add to Cart';

    const buyBtn = document.createElement('a');
    buyBtn.classList.add('btn-reset', 'buy-now');
    buyBtn.innerText = 'Buy Now';

    btnWrapper.append(addToCartBtn, buyBtn);

    infoWrapper.append(btnWrapper);

    return infoWrapper;
  }

  render() {
    const wrapper = this.createWrapper('single-product__wrapper');
    wrapper.append(this.createInfo());

    this.container.append(wrapper);

    return this.container;
  }
}

export default SingleProductPage;
