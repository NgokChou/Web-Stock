import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Stock } from '../model/stock';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private stocks: Stock[] = [
    new Stock('Apple Inc.', 'AAPL', 150, 145, 'NASDAQ'),
    new Stock('Microsoft Corporation', 'MSFT', 300, 295, 'NASDAQ'),
    new Stock('Alphabet Inc.', 'GOOGL', 2800, 2750, 'NASDAQ'),
    new Stock('Amazon.com, Inc.', 'AMZN', 3500, 3400, 'NASDAQ'),
    new Stock('Tesla, Inc.', 'TSLA', 700, 680, 'NASDAQ'),
  ];
  
  private stocksSubject: BehaviorSubject<Stock[]> = new BehaviorSubject(this.stocks);
  stocks$: Observable<Stock[]> = this.stocksSubject.asObservable();

  constructor() {}
  
  getStocks(): Observable<Stock[]> {
    return this.stocks$;
  }
  

  addStock(stock: Stock) {
    this.stocks.push(stock);
    this.stocksSubject.next(this.stocks);
  }

  updateStock(updatedStock: Stock) {
    const index = this.stocks.findIndex(stock => stock.code === updatedStock.code);
    if (index !== -1) {
      this.stocks[index] = updatedStock;
      this.stocksSubject.next(this.stocks);
    }
  }

  deleteStock(code: string) {
    this.stocks = this.stocks.filter(stock => stock.code !== code);
    this.stocksSubject.next(this.stocks);
  }
}
