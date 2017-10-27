import { NgModule, Component } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { ProductsComponent } from './products/products.component';

@Component({
    selector: 'router-outlet'
  })

@NgModule({
    imports:[
        RouterModule.forRoot([
            {
                path: ""
                , component: ProductsComponent
            },
            {
                path: "products"
                , component: ProductsComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}