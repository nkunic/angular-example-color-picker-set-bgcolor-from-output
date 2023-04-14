import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {

  backgroundColor: string = '#ffffff';

  setColor(color: string) {
    this.backgroundColor = color;
  }

}
