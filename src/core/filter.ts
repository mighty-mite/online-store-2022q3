/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Data } from '../assets/data/data';

class Filter {
  // eslint-disable-next-line class-methods-use-this, max-len
  filterBrands(isElement: boolean, isToy: boolean, isHero: boolean, cards: Data[]) {
    let res: Data[] = [];

    if (!isElement && !isToy && !isHero) {
      res = cards;
    }

    if (isElement) {
      res.push(...cards.filter((item) => item.brand.startsWith('element')));
    }

    if (isToy) {
      res.push(...cards.filter((item) => item.brand.startsWith('toy-machine')));
    }

    if (isHero) {
      res.push(...cards.filter((item) => item.brand.startsWith('anti-hero')));
    }

    return res;
  }

  // eslint-disable-next-line max-len, class-methods-use-this
  filterCategories(isDecks: boolean, isWheels: boolean, isTrucks: boolean, isHelmets: boolean, cards: Data[]) {
    let res: Data[] = [];

    if (!isDecks && !isWheels && !isTrucks && !isHelmets) {
      res = cards;
    }

    if (isDecks) {
      res.push(...cards.filter((item) => item.category.startsWith('decks')));
    }

    if (isWheels) {
      res.push(...cards.filter((item) => item.category.startsWith('wheels')));
    }

    if (isTrucks) {
      res.push(...cards.filter((item) => item.category.startsWith('trucks')));
    }

    if (isHelmets) {
      res.push(...cards.filter((item) => item.category.startsWith('helmets')));
    }

    return res;
  }

  // eslint-disable-next-line class-methods-use-this
  filterPrice(min: number, max: number, cards: Data[]) {
    const res: Data[] = [];

    res.push(...cards.filter((item) => (+item.price >= min) && (+item.price <= max)));
    return res;
  }

  filterAmount(min: number, max: number, cards: Data[]) {
    const res: Data[] = [];

    res.push(...cards.filter((item) => (+item.amount >= min) && (+item.amount <= max)));
    return res;
  }
}

export default Filter;
