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

  allStocks: Stock[] = [];
  stocks: Stock[] = []; //danh sách hiển thị ở con, lấy từ Service
  keyword: string = ''; //từ khóa tìm kiếm

  selectedStock: Stock | null = null;   
  updatingStock: Stock | null = null;   
  private sub!: Subscription;

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.sub = this.stockService.stocks$.subscribe(data => {
      this.allStocks = data;
      this.stocks = this.filterStocks(data); // lọc lại mỗi khi data thay đổi
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe(); 
  }

  onSearch(): void {
    this.stocks = this.filterStocks(this.allStocks);
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

  handleDetail(stock: Stock): void {
    this.selectedStock = stock; // mở DetailDialog
  }

  handleUpdate(stock: Stock): void {
    this.updatingStock = stock; // mở UpdateDialog
  }

  onDetailClose(): void {
    this.selectedStock = null; // đóng DetailDialog
  }

  onUpdateClose(): void {
    this.updatingStock = null; // đóng UpdateDialog
  }

  onUpdateSave(updated: Stock): void {
    this.stockService.updateStock(updated);
    this.updatingStock = null; // lưu xong thì đóng
  }
}