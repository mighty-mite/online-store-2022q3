import Component from "../templates/component";

class Searchbar extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  render() {
    this.component.setAttribute("type", "text");
    this.component.setAttribute("placeholder", "Search for products");
    return this.component;
  }
}

export default Searchbar;
