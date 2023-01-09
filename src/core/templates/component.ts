abstract class Component {
  protected component: HTMLElement;

  constructor(tagName: string, className: string) {
    this.component = document.createElement(tagName);
    this.component.className = className;
  }

  render() {
    return this.component;
  }
}

export default Component;
