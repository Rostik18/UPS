import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-main-content',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  constructor(public dataService: DataService) {}
}
