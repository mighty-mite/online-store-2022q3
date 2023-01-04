import { Data } from '../assets/data/data';

export function getFilterValues(data: Data[], key: 'category' | 'brand') {
  const set = new Set();
  data.forEach((item) => {
    set.add(item[key]);
  });

  return Array.from(set) as string[];
}

export function getMaxDataValue(data: Data[], key: 'price' | 'amount') {
  const res: number[] = [];
  data.forEach((item) => {
    res.push(Number(item[key]));
  });
  return Math.max(...res);
}
