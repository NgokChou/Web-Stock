import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Stock } from '../model/stock';
@Injectable({
  providedIn: 'root',
})
export class StockService {
   private stocks: Stock[] = [
    new Stock('Test Stock Company', 'TSC', 85, 45, 'NYSE'),
    new Stock('Second Stock Company', 'SSC', 10, 20, 'NSE'),
    new Stock('Third Stock Company', 'THC', 500, 700, 'NYSE'),
  ];

  constructor() {}

  getStocks(): Observable<Stock[]> {
    return of(this.stocks);   // of() bọc giá trị thường thành Observable
  }

  getStock(code: string): Observable<Stock> {
    const found = this.stocks.find(s => s.code === code);
    if (found) {
      return of(found);
    } else {
      return throwError(() => new Error(`Stock ${code} not found`));
      // throwError() tạo Observable bị lỗi
    }
  }

   createStock(stock: Stock): Observable<Stock> {
    const exists = this.stocks.find(s => s.code === stock.code);
    if (exists) {
      return throwError(() => new Error(`Stock với code ${stock.code} đã tồn tại`));
    }
    this.stocks.push(stock);
    return of(stock);
  }

  updateStock(stock: Stock): Observable<Stock> {
    const index = this.stocks.findIndex(s => s.code === stock.code);
    if (index === -1) {
      return throwError(() => new Error(`Stock ${stock.code} không tồn tại`));
    }
    this.stocks[index] = stock;
    return of(stock);
  }

  deleteStock(code: string): Observable<boolean> {
    const index = this.stocks.findIndex(s => s.code === code);
    if (index === -1) {
      return throwError(() => new Error(`Stock ${code} không tồn tại`));
    }
    this.stocks.splice(index, 1);
    return of(true);
  }
}
