import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Stock } from '../../model/stock';
import { StockItem } from '../stock-item/stock-item';
import { CommonModule } from '@angular/common';
import { StockService } from '../../services/stock';


@Component({
  selector: 'app-stock-list',
  imports: [CommonModule, StockItem],
  templateUrl: './stock-list.html',
  styleUrl: './stock-list.css',
})
export class StockList implements OnChanges{

  @Input() stocks: Stock[] = [];

 filteredStocks: Stock[] = [];   // danh sách sau khi lọc
  searchText: string = '';        // text người dùng nhập

  // Dialog state
  showDialog: boolean = false;
  dialogMode: 'detail' | 'update' = 'detail';  // đang xem chi tiết hay update
  selectedStock: Stock | null = null;           // stock đang được chọn

  constructor(private stockService: StockService) {}

  // Khi @Input stocks thay đổi → cập nhật filteredStocks
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['stocks']) {
      this.applyFilter();
    }
  }

  // Lọc danh sách theo searchText
  applyFilter(): void {
    const keyword = this.searchText.toLowerCase();
    this.filteredStocks = this.stocks.filter(s =>
      s.name.toLowerCase().includes(keyword) ||
      s.code.toLowerCase().includes(keyword)
    );
  }

  // Gọi khi người dùng gõ vào ô tìm kiếm
  onSearch(): void {
    this.applyFilter();
  }

  // Xóa stock
  onDelete(code: string): void {
    if (!confirm('Bạn có chắc muốn xóa?')) return;
    this.stockService.deleteStock(code).subscribe({
      next: () => {
        // Xóa trực tiếp khỏi mảng stocks (stocks là reference từ AppComponent)
        const i = this.stocks.findIndex(s => s.code === code);
        this.stocks.splice(i, 1);
        this.applyFilter();
      },
      error: (err) => alert(err.message)
    });
  }

  // Mở dialog xem chi tiết
  onDetail(stock: Stock): void {
    this.selectedStock = { ...stock };  // copy để tránh sửa trực tiếp
    this.dialogMode = 'detail';
    this.showDialog = true;
  }

  // Mở dialog update
  onUpdate(stock: Stock): void {
    this.selectedStock = { ...stock };  // copy để edit
    this.dialogMode = 'update';
    this.showDialog = true;
  }

  // Lưu update
  onSaveUpdate(): void {
    if (!this.selectedStock) return;
    this.stockService.updateStock(this.selectedStock).subscribe({
      next: () => {
        // Cập nhật lại trong mảng gốc
        const i = this.stocks.findIndex(s => s.code === this.selectedStock!.code);
        this.stocks[i] = { ...this.selectedStock! };
        this.applyFilter();
        this.showDialog = false;
      },
      error: (err) => alert(err.message)
    });
  }

  // Đóng dialog
  onCloseDialog(): void {
    this.showDialog = false;
    this.selectedStock = null;
  }
}