import { Component } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  imports: [],
  templateUrl: './stock-item.html',
  styleUrl: './stock-item.css',
})
export class StockItem {
  stock: Stock = new Stock('Apple', 'AAPL', 100, 120);

  toggleFavorite(event: Event) {
    this.stock.favorite=true;
    console.log('Add to fav');
  }
}
