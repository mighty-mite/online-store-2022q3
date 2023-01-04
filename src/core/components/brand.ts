import Component from '../templates/component';
import { getFilterValues } from '../getFilterValues';
import { data } from '../../assets/data/data';

class Brand extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  createHeading() {
    const heading = document.createElement('h2');
    heading.classList.add('category__heading');
    heading.innerHTML = 'Brand';
    return heading;
  }

  createOptions() {
    const categories = getFilterValues(data, 'brand');

    categories.forEach((item) => {
      const li = document.createElement('li');
      li.classList.add('brand__wrapper');

      const input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      input.classList.add('brand__option');
      input.setAttribute('id', item);

      const label = document.createElement('label');
      label.setAttribute('for', item);
      label.classList.add('brand__label');
      label.innerText = item.charAt(0).toUpperCase() + item.slice(1);

      const amount = document.createElement('p');
      amount.classList.add('brand__amount');

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

export default Brand;
