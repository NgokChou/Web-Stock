import { Component, signal } from '@angular/core';
import { StockItem } from './stock/stock-item/stock-item';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  imports: [StockItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Web-Stock');
}
