import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/services/products.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Techspace';

  product:any;
  constructor(private service:ProductsService) {}
  
  ngOnInit() {
  this.service.getProducts()
    .subscribe(response => {
      this.product = response;
    });

    
  }
 
}
