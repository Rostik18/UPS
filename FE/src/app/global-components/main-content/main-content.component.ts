import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-main-content',
  imports: [RouterOutlet],
  templateUrl: './main-content.component.html',
  //styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  title = 'UPS';
}
