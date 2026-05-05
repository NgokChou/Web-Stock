import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { NgIf } from '@angular/common';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  imports: [NgIf],
  templateUrl: './stock-item.html',
  styleUrl: './stock-item.css',
})
export class StockItem {
  @Input() stock!:Stock;

  @Output() onDelete = new EventEmitter<string>();
  @Output() onUpdate = new EventEmitter<Stock>();
  @Output() onDetail = new EventEmitter<Stock>();

  toggleFavorite(): void {
  this.stock.favorite = !this.stock.favorite;
}
}
