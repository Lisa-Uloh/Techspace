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
  id!: number;
  product!: Product;

  constructor(public products: ProductsService,
    private route: ActivatedRoute,
    private router: Router) { }

   ngOnInit(): void {
    this.id = this.route.snapshot.params['productid'];
        
    this.products.find(this.id).subscribe(data =>{
      this.product = data;
    }); 
  }
 
}
