import { Enterprise } from "./enterprise";
import { Features } from "./features";
import { Free } from "./free";
import { Premium } from "./premium";

export interface Product {
    id: number;
    title: string;
    text: string;
    link: string;
    featuresId: Features;
    freeId: Free;
    enterpriseId:Enterprise ;
    premiumId:Premium ;
}
