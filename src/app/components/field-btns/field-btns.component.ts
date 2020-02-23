import { Component, OnInit, Input } from '@angular/core';
import { Field } from 'src/app/models/tree';

@Component({
  selector: 'app-field-btns',
  templateUrl: './field-btns.component.html',
  styleUrls: ['./field-btns.component.scss']
})
export class FieldBtnsComponent implements OnInit {

  @Input() field: Field;

  constructor() { }

  raise(color: string) {
    this.field[color]++;
  }

  decrease(color: string) {
    if (this.field[color] > 0) {
      this.field[color]--;
    }
  }

  toggleSell() {
    this.field.sold = !this.field.sold;
  }

  ngOnInit() {
  }

}
