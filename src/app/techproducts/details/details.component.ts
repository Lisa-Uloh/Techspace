import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enterprise } from 'src/app/model/enterprise';
import { Features } from 'src/app/model/features';
import { Free } from 'src/app/model/free';
import { Premium } from 'src/app/model/premium';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 

  product!: Product;
  feature!: Features;
  free!: Free;
  premium!: Premium;
  enterprise!: Enterprise;

  constructor(public products: ProductsService,
    private route: ActivatedRoute,
    private router: Router) { }

   ngOnInit(): void {
  
    // this.id = this.route.snapshot.params['id'];
   this.route.paramMap.subscribe((param)=>{
      var id = Number(param.get('id'));
      this.getProductId(id);
      this.getfeaturesId(id);
      this.getfreeId(id);
      this.getpremiumId(id);
      this.getenterpriseId(id);
    });
  
    // this.products.getProductId(this.id).subscribe((data: Product)=>{
    //   this.product = data;
    // });

   

  }
  getProductId(id:number)
  {
    this.products.getProductId(id).subscribe((data) =>{
      console.log(data);
      this.product = data
      console.log(this.product);
    })
  }

  getfeaturesId(id:number)
  {
    this.products.getFeaturesId(id).subscribe((data) =>{
      console.log(data);
      this.feature = data
    
    })
  }

  getfreeId(id:number)
  {
    this.products.getFreeId(id).subscribe((data) =>{
      console.log(data);
      this.free = data
      
    })
  }

  getpremiumId(id:number)
  {
    this.products.getPremiumId(id).subscribe((data) =>{
      console.log(data);
      this.premium = data
    
    })
  }

  getenterpriseId(id:number)
  {
    this.products.getEnterpriseId(id).subscribe((data) =>{
      console.log(data);
      this.enterprise = data
   
    })
  }
}
