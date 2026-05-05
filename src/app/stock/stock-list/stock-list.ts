import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockItem } from '../stock-item/stock-item';
import { StockService } from '../../services/stock';
import { Stock } from '../../model/stock';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stock-list',
  imports: [CommonModule, StockItem],
  templateUrl: './stock-list.html',
  styleUrl: './stock-list.css',
})
export class StockList implements OnInit, OnDestroy {

  stocks: Stock[] = [];
  private sub!: Subscription;

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.sub = this.stockService.getStocks().subscribe(data => {
      this.stocks = data; // ← lấy từ Service
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  handleDelete(code: string): void {
    this.stockService.deleteStock(code);
  }

  handleUpdate(stock: Stock): void {
    // ← câu 5 sẽ mở dialog ở đây
    console.log('Update:', stock);
  }

  handleDetail(stock: Stock): void {
    // ← câu 5 sẽ mở dialog ở đây
    console.log('Detail:', stock);
  }
}