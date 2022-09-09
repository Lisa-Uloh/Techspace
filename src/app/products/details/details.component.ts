import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id!: number;
  product!: Product;

  constructor(public products: ProductsService,
    private route: ActivatedRoute,
    private router: Router) { }

   ngOnInit(): void {
  
    this.id = this.route.snapshot.params['id'];
  
    this.products.getProductId(this.id).subscribe((data: Product)=>{
      this.product = data;
  });
}

}
