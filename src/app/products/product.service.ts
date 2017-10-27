import { Injectable } from '@angular/core';
//import {Http, Response} from '@angular/http';
//import {Observable} from 'rxjs/Observable';

import { Product } from './product';
import { PRODUCT_ITEMS } from './product.data';

//lodash
import { findIndex } from 'lodash';


@Injectable()
export class ProductService {

    private pItems = PRODUCT_ITEMS;

    constructor() { }

    getProductsFromData(): Product[] {
        //console.log(this.pItems);
        return this.pItems;
    }

    addProduct(product:Product){
        this.pItems.push(product);
        console.log(this.pItems);
    }

    updateProduct(product:Product){
        let index = findIndex(this.pItems, (p:Product)=> {
            return p.id === product.id;
        })

        console.log('edited index is: ' + index);
        this.pItems[index] = product;
    }

    deleteProduct(product:Product){
        this.pItems.splice(this.pItems.indexOf(product), 1);
    }

}


// getProducts(): Product[]{

    //     return [
    //         {
    //             id:1
    //             , name: 'Scissors'
    //             , description: 'Use this to cut stuff'
    //             , price: 4.99
    //         },
    //         {
    //             id:2
    //             , name: 'Knifes'
    //             , description: 'Use this to cut stuff too'
    //             , price: 5.99
    //         },
    //         {
    //             id:3
    //             , name: 'Spoons'
    //             , description: 'Use this to eat'
    //             , price: 6.99
    //         }
    //     ]

    // }