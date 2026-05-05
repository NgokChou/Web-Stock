import { Component } from '@angular/core';
import { Stock } from './model/stock';
import { StockList } from './stock/stock-list/stock-list';
import { CreateStock } from './stock/create-stock/create-stock';
import { StockItem } from './stock/stock-item/stock-item';
import { StockService } from './services/stock';

@Component({
  selector: 'app-root',
  imports: [StockItem, CreateStock, StockList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private stockService: StockService) {}

  onStockAdded(stock: Stock): void {
    this.stockService.addStock(stock); // ← đẩy vào Service, StockList tự cập nhật
  }
}