/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Component from '../templates/component';

class Searchbar extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  render() {
    this.component.setAttribute('type', 'text');
    this.component.setAttribute('placeholder', 'Search for products');
    return this.component;
  }
}

export default Searchbar;
