import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl, FormBuilder } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-create-stock',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-stock.html',
  styleUrl: './create-stock.css',
})
export class CreateStock {
  public stockForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(){
    this.stockForm = this.fb.group({
      name: [null, Validators.required],
      code: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit(){
    console.log('Giá trị stock', this.stockForm.value);
  }
  
}
