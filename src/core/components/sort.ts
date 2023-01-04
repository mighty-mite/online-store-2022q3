/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Component from '../templates/component';
// import { getFilterValues } from "../getFilterValues";
// import { data } from "../../assets/data/data";

class Sort extends Component {
  static Categories = ['category', 'price', 'color', 'brand'];

  // eslint-disable-next-line no-useless-constructor
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  // eslint-disable-next-line class-methods-use-this
  createSelect() {
    const select = document.createElement('select');
    select.classList.add('sort__select');
    select.setAttribute('id', 'sort');
    select.setAttribute('name', 'sort');

    Sort.Categories.forEach((item) => {
      const option = document.createElement('option');
      option.setAttribute('value', item);
      option.innerHTML = item.charAt(0).toUpperCase() + item.slice(1);
      select.append(option);
    });

    return select;
  }

  render() {
    this.component.append(this.createSelect());
    return this.component;
  }
}

export default Sort;
