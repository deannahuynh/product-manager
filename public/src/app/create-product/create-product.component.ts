import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  errors: any;
  newProduct = {
    title: "",
    imgUrl: "",
    price: ""
  }

  constructor( 
    private _router: Router,
    private _httpService: HttpService
    ) { }

  ngOnInit() {
  }

  handleCancel(){
    this._router.navigate(['/'])
  }

  createProductFromService(){
    this._httpService.createProduct(this.newProduct)
      .subscribe((data: any) => {
        if (data['errors']) {
          this.errors = data.errors;
          console.log(this.errors)
        } else {
          this._router.navigate(['/'])
        }
      })
  }

}
