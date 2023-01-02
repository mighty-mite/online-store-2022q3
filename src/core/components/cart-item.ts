import Component from "../templates/component";

class CartItem extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  render() {
    return this.component;
  }
}

export default CartItem;
