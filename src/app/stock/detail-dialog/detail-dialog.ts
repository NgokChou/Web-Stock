import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { NgIf,NgClass } from '@angular/common';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-detail-dialog',
  imports: [NgIf, NgClass],
  templateUrl: './detail-dialog.html',
  styleUrl: './detail-dialog.css',
})
export class DetailDialog {
  @Input() stock!:Stock;
  @Output() onClose = new EventEmitter<void>();
}
