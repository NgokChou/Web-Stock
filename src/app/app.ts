import { Component, OnInit } from '@angular/core';
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
export class App implements OnInit{
  stocks: Stock[] = [];

   constructor(private stockService: StockService) {}

  ngOnInit(): void {
    // ② Gọi hàm getStocks(), nhận về Observable
    this.stockService.getStocks()
      .subscribe(stocks => {         // ③ "subscribe" = mở hộp thư ra đọc
        this.stocks = stocks;        // ④ gán dữ liệu nhận được vào this.stocks
      });
  } 
}