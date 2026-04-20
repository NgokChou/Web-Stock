import { Component } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  imports: [],
  templateUrl: './stock-item.html',
  styleUrl: './stock-item.css',
})
export class StockItem {
  stock: Stock = new Stock('Apple', 'AAPL', 100, 120, 'NASDAQ');

  toggleFavorite(event: Event) {
    this.stock.favorite = !this.stock.favorite;
    console.log('Add to fav');
  }
}
