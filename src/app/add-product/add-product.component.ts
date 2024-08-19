import { Component , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {

  name: string = '';
  image: string = 'assets/images/dummy-image.jpg'; // Default image
  price: number = 0;
  description: string = '';

  @Output() productAdded = new EventEmitter<{ name: string; image: string; price: number; description: string }>();

  addProduct() {
    this.productAdded.emit({
      name: this.name,
      image: this.image,
      price: this.price,
      description: this.description
    });
  }

}
