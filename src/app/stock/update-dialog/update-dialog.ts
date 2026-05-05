import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Stock } from '../../model/stock';
import { StockService } from '../../services/stock';

@Component({
  selector: 'app-update-dialog',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './update-dialog.html',
  styleUrl: './update-dialog.css',
})
export class UpdateDialog implements OnInit {
  @Input() stock!: Stock;           // nhận stock cần sửa từ cha
  @Output() onClose = new EventEmitter<void>();    // báo cha đóng dialog
  @Output() onSave = new EventEmitter<Stock>();    // báo cha lưu stock mới

  updateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Khởi tạo form với giá trị hiện tại của stock
    this.updateForm = this.fb.group({
      name:          [this.stock.name, Validators.required],
      price:         [this.stock.price, [Validators.required, Validators.min(0)]],
      previousPrice: [this.stock.previousPrice, [Validators.required, Validators.min(0)]],
      exchange:      [this.stock.exchange],
    });
  }

  onSubmit(): void {
    if (this.updateForm.invalid) return;
    const v = this.updateForm.value;
    const updated = new Stock(v.name, this.stock.code, v.price, v.previousPrice, v.exchange);
    updated.favorite = this.stock.favorite; // giữ lại trạng thái favorite
    this.onSave.emit(updated); // gửi stock đã cập nhật lên cha
  }
}
