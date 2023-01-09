import { Data } from '../assets/data/data';
class Search {
  search(cards: Data[], searchWorld: string){
    let res: Data[] = [];
    res.push(...cards.filter((item) => item.name.toLowerCase().includes(searchWorld)))
    return res
  }
}
export default Search;