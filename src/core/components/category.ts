/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Component from '../templates/component';
import { getFilterValues } from '../getFilterValues';
import { data } from '../../assets/data/data';

class Category extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  // eslint-disable-next-line class-methods-use-this
  createHeading() {
    const heading = document.createElement('h2');
    heading.classList.add('category__heading');
    heading.innerHTML = 'Category';
    return heading;
  }

  createOptions() {
    const categories = getFilterValues(data, 'category');

    categories.forEach((item) => {
      const li = document.createElement('li');
      li.classList.add('category__wrapper');

      const input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.classList.add('category__option');
      input.setAttribute('id', item);

      const label = document.createElement('label');
      label.setAttribute('for', item);
      label.classList.add('category__label');
      label.innerText = item.charAt(0).toUpperCase() + item.slice(1);

      const amount = document.createElement('p');
      amount.classList.add('category__amount');

      li.append(input, label, amount);
      this.component.append(li);
    });
  }

  render() {
    this.component.append(this.createHeading());
    this.createOptions();
    return this.component;
  }
}

export default Category;
