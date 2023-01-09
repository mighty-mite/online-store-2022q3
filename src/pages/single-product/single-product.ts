/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Page from '../../core/templates/page';
import { data } from '../../assets/data/data';

class SingleProductPage extends Page {
  // eslint-disable-next-line no-useless-constructor
  constructor(id: string, className: string) {
    super(id, className);
  }

  cardId = (Number(localStorage.getItem('productChosen')) - 1)!;

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

    const infoTitle = this.createWrapper('single-product__title');
    infoTitle.innerHTML = data[this.cardId].name;

    const infoPrice = this.createWrapper('single-product__price');
    infoPrice.innerHTML = `$${data[this.cardId].price}`;

    const infoDescription = this.createWrapper('single-product__desc');
    const descriptionHeading = document.createElement('p');
    const descriptionText = document.createElement('p');
    descriptionHeading.innerHTML = 'Product Description';
    descriptionText.innerHTML = `${data[this.cardId].description}`;
    infoDescription.append(descriptionHeading, descriptionText);

    const table = document.createElement('table');
    table.classList.add('single-product__table');

    const rowBrand = document.createElement('tr');
    const thBrand = document.createElement('th');
    thBrand.innerHTML = 'Brand:';
    const tdBrand = document.createElement('td');
    tdBrand.innerHTML = `${data[this.cardId].brand}`;
    rowBrand.append(thBrand, tdBrand);

    const rowYear = document.createElement('tr');
    const thYear = document.createElement('th');
    thYear.innerHTML = 'Year:';
    const tdYear = document.createElement('td');
    tdYear.innerHTML = `${data[this.cardId].year}`;
    rowYear.append(thYear, tdYear);

    table.append(rowBrand, rowYear);

    const btnWrapper = this.createWrapper('single-product__cards');

    const addToCartBtn = document.createElement('button');
    addToCartBtn.classList.add('btn-reset', 'add-card');
    addToCartBtn.innerText = 'Add to Cart';

    const buyBtn = document.createElement('button');
    buyBtn.classList.add('btn-reset', 'buy-now');
    buyBtn.innerText = 'Buy Now';

    btnWrapper.append(addToCartBtn, buyBtn);

    infoWrapper.append(infoTitle, infoPrice, infoDescription, table, btnWrapper);

    return infoWrapper;
  }

  render() {
    const wrapper = this.createWrapper('single-product__wrapper');

    const imgId = localStorage.getItem('productChosen');

    const img = this.createImg(`../src/assets/images/${imgId}.jpg`);
    wrapper.append(img, this.createInfo());

    this.container.append(wrapper);

    return this.container;
  }
}

export default SingleProductPage;
