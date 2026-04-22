import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Stock } from '../model/stock';
@Injectable({
  providedIn: 'root',
})
export class Stock {
   private stocks: Stock[] = [
    new Stock('Test Stock Company', 'TSC', 85, 45, 'NYSE'),
    new Stock('Second Stock Company', 'SSC', 10, 20, 'NSE'),
    new Stock('Third Stock Company', 'THC', 500, 700, 'NYSE'),
  ];

  constructor() {
    getStocks(): Observable<Stock[]> {
    return of(this.stocks);   // of() bọc giá trị thường thành Observable
  }
  }
}
