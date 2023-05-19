import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) {}
  getProducts(){
    return this.http.get('https://dummyjson.com/products')
  }
  getDetails(id:Number){
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }
}
