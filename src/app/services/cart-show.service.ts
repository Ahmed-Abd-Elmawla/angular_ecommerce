import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class CartShowService {
  private myArray = new BehaviorSubject([]);
  arrayVal = this.myArray.asObservable();
  constructor() {}
  getArray() {
    return this.myArray;
  }
  editArray(data: any) {
    this.myArray.next(data);
  }
}
