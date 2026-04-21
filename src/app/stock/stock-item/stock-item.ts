import { Component, input, Input } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  imports: [],
  templateUrl: './stock-item.html',
  styleUrl: './stock-item.css',
})
export class StockItem {
  @Input() stock!:Stock;

  toggleFavorite(event: Event) {
    this.stock.favorite = !this.stock.favorite;
    console.log('Add to fav');
  }
}
