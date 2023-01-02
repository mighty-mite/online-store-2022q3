abstract class Page {
  protected container: HTMLElement;
  static TextObject = {};

  constructor(id: string, className: string) {
    this.container = document.createElement("section");
    this.container.id = id;

    this.container.classList.add(className);
  }

  protected createWrapper(className: string) {
    const wrapper = document.createElement("div");
    wrapper.classList.add(className);
    return wrapper;
  }

  protected createHeaderTitle(text: string) {
    const headerTitle = document.createElement("h1");
    headerTitle.innerText = text;
    return headerTitle;
  }

  render() {
    return this.container;
  }
}

export default Page;
