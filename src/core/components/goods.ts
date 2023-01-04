import Component from '../templates/component';
import Sort from './sort';

class Goods extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  createGoodsTopBar() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('goods__top');
    return wrapper;
  }

  createGoodsSort() {
    const goodsSort = document.createElement('div');
    goodsSort.classList.add('goods__top-left');

    const text = document.createElement('p');
    text.classList.add('goods__sort');
    text.innerHTML = 'Sort by: ';

    const sort = new Sort('div', 'sort').render();

    goodsSort.append(text, sort);

    return goodsSort;
  }

  createResets() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('goods__reset');

    const resetBtn = document.createElement('button');
    resetBtn.classList.add('goods__reset-btn');
    resetBtn.innerText = 'Reset Filters';

    const copyLinkBtn = document.createElement('button');
    copyLinkBtn.classList.add('goods__copy-btn');
    copyLinkBtn.innerText = 'Copy link';

    wrapper.append(resetBtn, copyLinkBtn);
    return wrapper;
  }

  createLayoutControls() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('goods__top-right');

    const tileLayoutBtn = document.createElement('button');
    tileLayoutBtn.classList.add(
      'goods__layout-button',
      'goods__layout-button--tile',
      'chosen',
    );

    const listLayoutBtn = document.createElement('button');
    listLayoutBtn.classList.add(
      'goods__layout-button',
      'goods__layout-button--list',
    );

    wrapper.append(tileLayoutBtn, listLayoutBtn);

    return wrapper;
  }

  createCardField() {
    const cardField = document.createElement('div');
    cardField.classList.add('goods__wrapper');
    return cardField;
  }

  render() {
    const topBar = this.createGoodsTopBar();
    const cardField = this.createCardField();

    topBar.append(this.createGoodsSort());
    topBar.append(this.createResets());
    topBar.append(this.createLayoutControls());

    this.component.append(topBar);
    this.component.append(cardField);

    return this.component;
  }
}

export default Goods;
