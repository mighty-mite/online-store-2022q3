import Component from '../templates/component';
import RangeStock from './rangeStock';
// import getFilterValues from "../getFilterValues";
// import { data } from "../../assets/data/data";

class Stock extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  createHeading() {
    const heading = document.createElement('h2');
    heading.classList.add('amount__heading');
    heading.innerHTML = 'Stock';
    return heading;
  }

  render() {
    this.component.append(this.createHeading());
    this.component.append(new RangeStock('div', 'range').render());
    return this.component;
  }
}

export default Stock;
