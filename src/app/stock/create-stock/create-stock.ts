import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-create-stock',
  imports: [ReactiveFormsModule],
  templateUrl: './create-stock.html',
  styleUrl: './create-stock.css',
})
export class CreateStock {
  public stockForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    code: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    price: new FormControl(null, [Validators.required, Validators.min(0)])
  });

  constructor(){
  }

  onSubmit() {
    console.log('Giá trị Stock',this.stockForm.value);
  }
  
}
