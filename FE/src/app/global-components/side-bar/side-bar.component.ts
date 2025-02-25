import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { DataService } from '../../services/data.service';
@Component({
  standalone: true,
  selector: 'app-side-bar',
  imports: [DrawerModule],
  templateUrl: './side-bar.component.html',
  // styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  constructor(public dataService: DataService) {}
}
