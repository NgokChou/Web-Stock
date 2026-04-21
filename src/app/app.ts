import { Component } from '@angular/core';
import { Stock } from './model/stock';
import { StockList } from './stock/stock-list/stock-list';
import { CreateStock } from './stock/create-stock/create-stock';
import { StockItem } from './stock/stock-item/stock-item';

@Component({
  selector: 'app-root',
  imports: [StockItem, CreateStock, StockList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Danh sách cổ phiếu đặt ở CHA — dùng chung cho cả 2 con
  stocks: Stock[] = [
    new Stock('Apple', 'AAPL', 100, 120, 'NASDAQ'),
    new Stock('Google', 'GOOG', 200, 180, 'NASDAQ'),
    new Stock('Microsoft', 'MSFT', 150, 140, 'NASDAQ'),
  ];

  onStockAdded(stock: Stock) {
    this.stocks.push(stock); // ← nhận từ CreateStock, đẩy xuống StockList
  }
}