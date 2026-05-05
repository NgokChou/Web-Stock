import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockItem } from '../stock-item/stock-item';
import { StockService } from '../../services/stock';
import { Stock } from '../../model/stock';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stock-list',
  imports: [CommonModule, FormsModule, StockItem],
  templateUrl: './stock-list.html',
  styleUrl: './stock-list.css',
})
export class StockList implements OnInit, OnDestroy {

  stocks: Stock[] = []; //danh sách hiển thị ở con, lấy từ Service
  keyword: string = ''; //từ khóa tìm kiếm
  private sub!: Subscription;

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.sub = this.stockService.stocks$.subscribe(data => {
      this.stocks = this.filterStocks(data); // lọc lại mỗi khi data thay đổi
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe(); 
  }

  onSearch(): void {
    this.sub = this.stockService.stocks$.subscribe(data => {
      this.stocks = this.filterStocks(data); 
    });
  }

  private filterStocks(data: Stock[]): Stock[] {
    const kw = this.keyword.trim().toLowerCase();
    if (!kw) return data; 
    return data.filter(stock =>
      stock.name.toLowerCase().includes(kw) ||
      stock.code.toLowerCase().includes(kw)
    );
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