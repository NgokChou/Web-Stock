import { Component } from '@angular/core';
import { Stock } from '../../model/stock';
import { StockItem } from '../stock-item/stock-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-list',
  imports: [CommonModule, StockItem],
  templateUrl: './stock-list.html',
  styleUrl: './stock-list.css',
})
export class StockList {

  stocks: Stock[] = [
    new Stock('Apple', 'AAPL', 100, 120, 'NASDAQ'),
    new Stock('Google', 'GOOG', 200, 180, 'NASDAQ'),
    new Stock('Microsoft', 'MSFT', 150, 140, 'NASDAQ'),
  ];

  onStockAdded(stock: Stock) {
    // Nhận stock từ CreateStock, thêm vào danh sách
    this.stocks.push(stock);
  }

  onDeleteStock(index: number) {
    this.stocks.splice(index, 1);
  }
}
