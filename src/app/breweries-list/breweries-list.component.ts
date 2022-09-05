import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-breweries-list',
  templateUrl: './breweries-list.component.html',
  styleUrls: ['./breweries-list.component.css']

})
export class BreweriesListComponent implements OnInit {
  product:any;
  
  constructor(private service:ProductsService) {}
  
  ngOnInit() {
  this.service.getAll()
    .subscribe(response => {
      this.product = response;
    });
  }
  

}
