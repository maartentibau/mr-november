import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { MyMenuItemComponent } from './my-menu-item/my-menu-item.component';

@Component({
  selector: 'monthly-recap-root',
  imports: [CommonModule, RouterModule, TitleComponent, MyMenuComponent, MyMenuItemComponent, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent {
  doSomething() {
    console.log('I am clicked');
  }
}
