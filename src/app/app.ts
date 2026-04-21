import { Component, signal } from '@angular/core';
import { StockItem } from './stock/stock-item/stock-item';
import { CreateStock } from './stock/create-stock/create-stock';

@Component({
  selector: 'app-root',
  imports: [StockItem, CreateStock],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Web-Stock');
}
