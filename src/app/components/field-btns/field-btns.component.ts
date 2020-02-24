import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Field } from 'src/app/models/tree';

@Component({
  selector: 'app-field-btns',
  templateUrl: './field-btns.component.html',
  styleUrls: ['./field-btns.component.scss']
})
export class FieldBtnsComponent implements OnInit {

  @Input() field: Field;
  @Output() harvest = new EventEmitter();

  constructor() { }

  raise(color: string) {
    this.field[color]++;
  }

  decrease(color: string) {
    if (this.field[color] > 0) {
      this.field[color]--;
    }
  }

  doHarvest(): void {
    this.harvest.emit(this.field);
  }

  toggleSell() {
    if (this.field.red === 0 && this.field.red === 0) {
      this.field.sold = !this.field.sold;
    }
  }

  ngOnInit() {
  }

}
