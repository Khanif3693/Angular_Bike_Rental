import { Component, OnInit, OnChanges } from "@angular/core";

import { products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit, OnChanges {
  items;
  products;
  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.items = this.cartService.getItems();
    this.products = products;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
