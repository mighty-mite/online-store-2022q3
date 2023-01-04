import Component from '../templates/component';
import RangePrice from './rangePrice';
// import getFilterValues from "../getFilterValues";
// import { data } from "../../assets/data/data";

class Price extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  createHeading() {
    const heading = document.createElement('h2');
    heading.classList.add('price__heading');
    heading.innerHTML = 'Price';
    return heading;
  }

  render() {
    this.component.append(this.createHeading());
    this.component.append(new RangePrice('div', 'range').render());
    return this.component;
  }
}

export default Price;
