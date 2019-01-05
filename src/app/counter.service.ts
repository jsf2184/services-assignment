export class CounterService {
  count: number;

  constructor() {
    this.count = 0;
  }

  incChangeCounter() {
    this.count++;
    console.log('CounterService.incChangeCounter(): count = ' + this.count);
  }
}
