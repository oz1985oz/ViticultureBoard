import { Component } from '@angular/core';
import { Tree } from './models/tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tree: Tree = new Tree();
}
