import { Component, OnInit } from '@angular/core';

//Product interface
import { Product } from './product';
import { ProductService } from './product.service';

import { Form } from '@angular/forms';

//lodash
import { clone } from 'lodash';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[];

  productForm:boolean = false;
  editProductForm:boolean = false;

  isNewForm:boolean;

  newProduct:any = {};
  editedProduct:any = {};

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.products = this.productService.getProductsFromData();
    //console.log(this.products);
  }

  showEditProductForm(product:Product){
    //console.log(product);
    if (!product){
      this.productForm = false;
      return;
    }

    this.editProductForm = true;
    this.editedProduct = clone(product); //clone from lodash function
    //this.editedProduct = product;
  }

  removeProduct(product){
    this.productService.deleteProduct(product);
  }

  showAddProductForm(){
    //console.log(this.productForm);
    //this.productForm = !this.productForm;
    //return;

    if (this.products.length){
      this.newProduct = {};
    }

    this.productForm = true;
    this.isNewForm = true;

  }

  saveProduct(product:Product){
    if (this.isNewForm){
      //add new product
      this.productService.addProduct(product);

    } else {
      //update existing

    }
    this.productForm = false;
  }

  cancelNewProduct(){
    this.newProduct = {};
    this.productForm = false;
  }

  updateProduct(){
    this.productService.updateProduct(this.editedProduct);
    this.editProductForm = false;
    this.editedProduct = {};
  }

  cancelEdits(){
    this.editedProduct = {};
    this.editProductForm = false;
  }

}
