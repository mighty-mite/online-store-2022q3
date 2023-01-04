/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Component from '../templates/component';

class Promo extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  render() {
    return this.component;
  }
}

export default Promo;
