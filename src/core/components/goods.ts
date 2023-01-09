/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Component from '../templates/component';
import Sort from './sort';

class Goods extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  // eslint-disable-next-line class-methods-use-this
  createGoodsTopBar() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('goods__top');
    return wrapper;
  }

  // eslint-disable-next-line class-methods-use-this
  createGoodsSort() {
    const goodsSort = document.createElement('div');
    goodsSort.classList.add('goods__top-left');

    const text = document.createElement('p');
    text.classList.add('goods__sort');
    text.innerHTML = 'Sort by: ';

    const sort = new Sort('div', 'sort').render();

    goodsSort.append(text, sort);

    const found = document.createElement('p');
    found.classList.add('good-found')
    const foundNum = document.createElement('span');
    foundNum.classList.add('good-found__num')
    found.innerHTML = 'Found: ';
    found.append(foundNum);
    goodsSort.append(found)
    return goodsSort;
  }

  // eslint-disable-next-line class-methods-use-this
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

  // eslint-disable-next-line class-methods-use-this
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

  // eslint-disable-next-line class-methods-use-this
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
