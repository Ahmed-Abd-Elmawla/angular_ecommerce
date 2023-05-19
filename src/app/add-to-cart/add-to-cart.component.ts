import { Component } from '@angular/core';
import { CartCounterService } from '../services/cart-counter.service';
import { CartShowService } from '../services/cart-show.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent {
  orderProducts!: any;
  itemPrice!:any;
  counter!:any;
  sum:number=0;
  constructor(
    private orders: CartShowService,
    private cart: CartCounterService
  ) {}
  ngOnInit() {
    this.orders.arrayVal.subscribe((res) => (this.orderProducts = res));
    this.cart.counterVal.subscribe((res)=>(this.counter=res,this.totalPrice()))
  }
  increase(iD: any) {
    let product = this.orderProducts?.find((item: any) => item.id == iD);
    if(product.quantity<product.stock){
      product.quantity++;
      product.manyItem=product.quantity*product.price;
      this.totalPrice();
    }
  }
  decrease(iD: number) {
    let product = this.orderProducts?.find((item: any) => item.id == iD);
    if (product.quantity > 1) {
      product.quantity--;
      product.manyItem=product.quantity*product.price;
      this.totalPrice();
    }
  }
  remove(iD: number) {
    this.cart.setCounter(--this.counter);
    this.orderProducts=this.orderProducts.filter((item:any)=>item.id != iD)
    this.orders.editArray(this.orderProducts);
    this.totalPrice();
  }
  totalPrice(){
    this.sum=0;
    this.orderProducts?.map((item:any) => this.sum +=Number(item.manyItem));
    return this.sum;
  }
}
