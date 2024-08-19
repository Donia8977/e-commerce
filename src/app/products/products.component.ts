import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  @Input() product: {

    name: string; 
    image: string; 
    price: number; 
    description: string; 
  } = { name: '', image: '', price: 0, description: '' };
  


}
