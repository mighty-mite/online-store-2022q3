import Component from '../templates/component';

class Promo extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  render() {
    return this.component;
  }
}

export default Promo;
