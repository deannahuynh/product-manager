import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = []; 

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    ) { }

  ngOnInit() {
    this._httpService.getProducts()
      .subscribe(( products: any ) => {
        this.products = products
      })
  }

  deleteProduct(id){
    this._httpService.deleteProduct(id)
      .subscribe(() => {
        this.products = this.products.filter( product => product._id !== id );
      });
  }

}
