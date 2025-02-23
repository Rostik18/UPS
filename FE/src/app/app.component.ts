import { Component } from '@angular/core';
import { MainHeaderComponent } from './global-components/main-header/main-header.component';
import { MainContentComponent } from './global-components/main-content/main-content.component';
import { SideBarComponent } from './global-components/side-bar/side-bar.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    MainHeaderComponent,
    MainContentComponent,
    SideBarComponent,
  ]
})
export class AppComponent {
  title = 'UPS';
}
