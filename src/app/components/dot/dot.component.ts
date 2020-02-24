import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.scss']
})
export class DotComponent implements OnInit {

  @Input() grape: boolean;

  constructor() { }

  toggleDot(): void {
    this.grape = !this.grape;
  }

  ngOnInit() {
  }

}
