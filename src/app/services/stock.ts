import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';

@Injectable({
  providedIn: 'root',
})
export class StockService {

  private stocks: Stock[] = [
    new Stock('Test Stock Company', 'TSC', 100, 120, 'NASDAQ'),
    new Stock('Second Stock Company', 'SSC', 200, 180, 'NYSE'),
    new Stock('Last Stock Company', 'LSC', 150, 140, 'NSE'),
  ];

  getStocks(): Stock[] {
    return this.stocks;
  }

  createStock(stock: Stock) {
    let foundStock = this.stocks.find(each => each.code === stock.code);
    if (foundStock) {
      return false; // Trùng mã, không thêm
    }
    this.stocks.push(stock);
    return true; // Thêm thành công
  }
  toggleFavorite(stock: Stock) {
    let foundStock = this.stocks.find(each => each.code === stock.code);
    if (foundStock) {
      foundStock.favorite = !foundStock.favorite;
    }
  }
}
