import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkMenuItem } from '@angular/cdk/menu';

@Component({
  selector: 'monthly-recap-my-menu-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-menu-item.component.html',
  styleUrls: ['./my-menu-item.component.scss'],
  hostDirectives: [
    {
      directive: CdkMenuItem,
      inputs: ['cdkMenuItemDisabled: disabled'],
      outputs: ['cdkMenuItemTriggered: trigger'],
    },
  ],
})
export class MyMenuItemComponent {}
