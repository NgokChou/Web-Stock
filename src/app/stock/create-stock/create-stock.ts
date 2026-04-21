import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-stock',
  imports: [FormsModule],
  templateUrl: './create-stock.html',
  styleUrl: './create-stock.css',
})
export class CreateStock {
  public stock!: Stock;
  public confirmed: boolean = false;

  constructor(){
    this.stock = new Stock('test',"",0,0,"NASDAQ");
  }

  setStockPrice(price: number){ 
    this.stock.price=price;
    this.stock.previousPrice=price;
  }

  createStock() {
  console.log('Đang tạo Stock', this.stock);
}
}
