import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-commerce';


  products = [
    { name: 'Sample Product',
     //image: 'assets/images/IP1.PNG',
     image: 'D:\Angular_course\e-commerce\src\assets\images\IP1.PNG',
      price: 10, 
      description: 'Sample description' }
  ];

  addProduct(newProduct: { name: string; image: string; price: number; description: string }) {
    this.products.push(newProduct);
  }
}
