import { Component } from '@angular/core';
import { Tree, Field } from './models/tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tree: Tree = new Tree();

  onHarvest(field: Field): void {
    for (let i = field.red; i > 0; i--) {
      if (!this.tree.redGrapes[i - 1]) {
        this.tree.redGrapes[i - 1] = true;
        field.harvest = true;
        break;
      }
    }
    for (let i = field.white; i > 0; i--) {
      if (!this.tree.whiteGrapes[i - 1]) {
        this.tree.whiteGrapes[i - 1] = true;
        field.harvest = true;
        break;
      }
    }
  }

  yearPass(): void {
    this.tree.fields.forEach(x => x.harvest = false);
    this.ageGrapes();
  }

  ageGrapes(): void {
    for (let i = 8; i >= 0; i--) {
      if (this.tree.whiteGrapes[i]) {
        this.tree.whiteGrapes[i + 1] = true;
        this.tree.whiteGrapes[i] = false;
      }
      if (this.tree.redGrapes[i]) {
        this.tree.redGrapes[i + 1] = true;
        this.tree.redGrapes[i] = false;
      }
    }
  }
}
