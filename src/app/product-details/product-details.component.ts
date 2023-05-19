import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/product';
import { GetDataService } from '../services/get-data.service';
import { CartCounterService } from '../services/cart-counter.service';
import { CartShowService } from '../services/cart-show.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  selectedProduct!: any;
  counter: number = 0;
  newArr!: any[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private getData: GetDataService,
    private counterServ: CartCounterService,
    private orders: CartShowService
  ) {}
  ngOnInit() {
    this.getData
      .getDetails(this.activatedRoute.snapshot.params['id'])
      .subscribe((res: any) => (this.selectedProduct = res));
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
