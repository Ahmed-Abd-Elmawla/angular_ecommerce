import { Component } from '@angular/core';
import { CartCounterService } from '../services/cart-counter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  counter:number=0;
  constructor(private counterServ: CartCounterService) {}
  ngOnInit() {
    this.counterServ.counterVal.subscribe((res) => this.counter =res)
  }
}
