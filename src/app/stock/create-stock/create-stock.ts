import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl, FormBuilder } from '@angular/forms';
import { NgIf } from '@angular/common';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-create-stock',
  imports: [ReactiveFormsModule, NgIf, JsonPipe],
  templateUrl: './create-stock.html',
  styleUrl: './create-stock.css',
})
export class CreateStock {
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

  onSubmit(){
     const formData = new FormData();

    formData.append('name',  this.stockForm.get('name')?.value);
    formData.append('code',  this.stockForm.get('code')?.value);
    formData.append('price', String(this.stockForm.get('price')?.value));

    // In ra console để kiểm tra
    formData.forEach((value, key) => {
      console.log(key, value);
    });
  }
}

