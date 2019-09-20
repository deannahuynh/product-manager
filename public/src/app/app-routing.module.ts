import { HomePageComponent } from './home-page/home-page.component'
import { CreateProductComponent } from './create-product/create-product.component'
import { EditProductComponent } from './edit-product/edit-product.component'
import { ProductListComponent } from './product-list/product-list.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'create', component: CreateProductComponent },
  { path: 'edit/:id', component: EditProductComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', pathMatch: 'full', component: ProductListComponent }, // this is the default page that shows on index route
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
