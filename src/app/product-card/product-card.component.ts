import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';
import { CartCounterService } from '../services/cart-counter.service';
import { CartShowService } from '../services/cart-show.service';
import { GetDataService } from '../services/get-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Product[];
  counter: number = 0;
  newArr!: any[];
  constructor(
    private router: Router,
    private counterServ: CartCounterService,
    private orders: CartShowService
  ) {}
  toDetails(id: number) {
    this.router.navigate(['product-details', id]);
  }
  ngOnInit() {
    this.counterServ.counterVal.subscribe((res) => (this.counter = res));
    this.orders.arrayVal.subscribe((res) => (this.newArr = res));
  }

  addOrder(id: any, img: string, title: string, price: number, stock: number) {
    let mappedArr = this.newArr?.map((item) => item.id);
    if (!mappedArr.includes(id)) {
      this.counterServ.setCounter(++this.counter);
      let order = {
        id: id,
        thumbnail: img,
        title: title,
        price: price,
        quantity: 1,
        stock: stock,
        manyItem: price,
      };
      this.newArr.push(order);
      Swal.fire('Add To Cart Successfully', 'Check The Cart', 'success');
    } else {
      Swal.fire('Already In Cart', 'Check The Cart', 'warning');
    }
  }
}
