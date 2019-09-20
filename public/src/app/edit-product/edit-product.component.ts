import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product = null;
  errors: any;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params
      .subscribe((params: Params) => {
        this._httpService.getProduct(params.id)
          .subscribe((data: any) => {
            console.log(data)
            this.product = data
            console.log(this.product)
          })
      })
  }

  editProductFromService(){
    this._httpService.editProduct(this.product._id, {
      title: this.product.title,
      imgUrl: this.product.imgUrl,
      price: this.product.price
    })
      .subscribe((data: any) => {
        console.log("got edit data", data)
        if (data['errors']) {
          this.errors = data.errors;
          console.log(this.errors)
        } else {
          this._router.navigate(['/'])
        }
      })
  }

  deleteProduct(){
    this._httpService.deleteProduct(this.product._id)
      .subscribe(() => {
        this._router.navigate(['/'])
      })
  }

}
