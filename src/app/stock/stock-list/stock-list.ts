import { Component, Input } from '@angular/core';
import { Stock } from '../../model/stock';
import { StockItem } from '../stock-item/stock-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-list',
  imports: [CommonModule, StockItem],
  templateUrl: './stock-list.html',
  styleUrl: './stock-list.css',
})
export class StockList {

  @Input() stocks: Stock[] = [];

  onDeleteStock(index: number) {
    this.stocks.splice(index, 1);
  }
}
