import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl, FormBuilder } from '@angular/forms';
import { NgIf } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { Output, EventEmitter } from '@angular/core'; 
import { Stock } from '../../model/stock';  

@Component({
  selector: 'app-create-stock',
  imports: [ReactiveFormsModule, NgIf, JsonPipe],
  templateUrl: './create-stock.html',
  styleUrl: './create-stock.css',
})
export class CreateStock {
  @Output() stockAdded = new EventEmitter<Stock>();
  // ↑ "chuông thông báo" — khi submit sẽ phát lên cha

  public stockForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.stockForm = this.fb.group({
      name:  [null, Validators.required],
      code:  [null, [Validators.required, Validators.minLength(2)]],
      price: [null, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    const formValue = this.stockForm.value;

    // Tạo object Stock từ dữ liệu form
    const newStock = new Stock(
      formValue.name,
      formValue.code,
      formValue.price,
      formValue.price, // previousPrice = price
      'NASDAQ'         // exchange mặc định
    );

    this.stockAdded.emit(newStock); // ← bấm chuông, gửi stock lên cha
    this.stockForm.reset();         // ← reset form sau khi submit
  }
}

