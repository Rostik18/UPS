import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DataService } from '../../services/data.service';

@Component({
  standalone: true,
  selector: 'app-main-header',
  imports: [ButtonModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeaderComponent {
  constructor(public dataService: DataService) {}
}
