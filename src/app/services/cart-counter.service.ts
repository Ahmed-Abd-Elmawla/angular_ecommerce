import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartCounterService {
  private counter = new BehaviorSubject(0);
  counterVal = this.counter.asObservable();
  setCounter(newVal: number) {
    this.counter.next(newVal);
  }
}
