/* eslint-disable class-methods-use-this */
class Product {
  private container: HTMLElement;

  constructor(
    private num: string,
    private name: string,
    private amount: string,
    /*  private year: string, */
    private brand: string,
    private color: string,
    /* private size: string, */
    private price: string,
    private rating: string,
  ) {
    this.num = num;
    this.name = name;
    this.amount = amount;
    /*  this.year = year; */
    this.brand = brand;
    this.color = color;
    /*  this.size = size; */
    this.price = price;
    this.rating = rating;
    this.container = this.createNode('a', ['card']);
  }

  private createNode(tagName: string, className: string | string[]): HTMLElement {
    const node: HTMLElement = document.createElement(tagName);
    if (Array.isArray(className)) {
      // Here: 'className' is 'string[]'
      className.forEach((item) => {
        node.classList.add(item);
      });
    } else {
      // Here: 'x' is 'string'
      node.classList.add(className);
    }
    return node;
  }

  private createField(fieldName: string, fieldValue: string): HTMLElement {
    const field = this.createNode('p', `card__${fieldName}`);
    const fieldTitle = this.createNode('span', `card__${fieldName}-span`);
    fieldTitle.innerText = `${fieldName}: `;
    const fieldText = this.createNode('span', `card__${fieldName}-data`);
    fieldText.innerText = fieldValue;

    field.append(fieldTitle, fieldText);

    return field;
  }

  private createImg() {
    const img = this.createNode('img', 'card__img');
    img.setAttribute('src', `../src/assets/images/${this.num}.jpg`);
    img.setAttribute('alt', this.name);

    return img;
  }

  public buildCard(): HTMLElement {
    this.container.append(this.createImg());
    const cardText = this.createNode('div', 'card__text');
    const cardHeading = this.createNode('h2', 'card__heading');
    cardHeading.innerText = this.name;
    cardText.append(cardHeading);
    cardText.append(this.createField('brand', this.brand));
    cardText.append(this.createField('price', this.price));
    cardText.append(this.createField('color', this.color));
    cardText.append(this.createField('amount', this.amount));
    cardText.append(this.createField('rating', this.rating));

    this.container.setAttribute('href', '#single-product-page');

    this.container.append(cardText);
    return this.container;
  }
}

export default Product;
