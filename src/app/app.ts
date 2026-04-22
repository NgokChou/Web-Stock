import { Component, OnInit } from '@angular/core';
import { Stock } from './model/stock';
import { StockList } from './stock/stock-list/stock-list';
import { CreateStock } from './stock/create-stock/create-stock';
import { StockItem } from './stock/stock-item/stock-item';
import { StockService } from './services/stock';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CreateStock, StockList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  stocks: Stock[] = [];

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.stockService.getStocks()
      .subscribe(stocks => {
        this.stocks = stocks;
      });
  }  // ← đóng ngOnInit ở đây

  onStockAdded(stock: Stock): void {  // ← method riêng, ngang hàng với ngOnInit
    this.stockService.createStock(stock).subscribe({
      next: () => {
        this.stockService.getStocks().subscribe(s => this.stocks = s);
      },
      error: (err) => alert(err.message)
    });
  }
}