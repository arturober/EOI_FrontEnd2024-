import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, input, Input, output, signal } from '@angular/core';
import { IntlCurrencyPipe } from '../pipes/intl-currency.pipe';
import { Product } from '../interfaces/product';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'product-item',
  imports: [DatePipe, UpperCasePipe, IntlCurrencyPipe, StarRatingComponent],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  product = input.required<Product>();
  showImage = input(true);
  delete = output<void>();

  deleteProduct() {
    this.delete.emit();
  }
}
