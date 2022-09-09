import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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
