import { dayMap, monthMap } from './constants';

export default class Calculator {
  constructor (month, day, year) {
    this.month = month; 
    this.day = day;
    this.year = year;
  }

  calculate() {
    const date = new Date(this.year, monthMap.get(this.month), this.day);
    
    return dayMap.get(date.getDay());
  }
}