import { Data } from '../assets/data/data';

class Sorting {
  sort(cards: Data[], sortType: string){
    let sortArr = [...cards];
    if(sortType === 'Price ASC') {
      sortArr.sort((a,b) => {
        const a1 = +a.price;
        const b1 = +b.price;
        return a1 - b1;
      })
      return sortArr;
    }else if(sortType === 'Price DESC') {
      sortArr.sort((a,b) => {
        const a1 = +a.price;
        const b1 = +b.price;
        return  b1 - a1;
      })
    }else if(sortType === 'Rating ASC') {
      sortArr.sort((a,b) => {
        const a1 = +a.rating;
        const b1 = +b.rating;
        return a1 - b1;
      })
    }else if(sortType === 'Rating DESC') {
      sortArr.sort((a,b) => {
        const a1 = +a.rating;
        const b1 = +b.rating;
        return  b1 - a1;
      })
    }
    return sortArr;
  }
}
export default Sorting;
