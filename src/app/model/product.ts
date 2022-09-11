import { Enterprise } from "./enterprise";
import { Features } from "./features";
import { Free } from "./free";
import { Premium } from "./premium";

export interface Product {
    id: number;
    name: string;
    text: string;
    about:string;
    link: string;
    logo: string;
    galery: string;
    image:any;
    featuresId: Features;
    freeId: Free;
    enterpriseId:Enterprise ;
    premiumId:Premium ;
}
