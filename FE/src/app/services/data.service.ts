import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  isSidebarOpen = signal<boolean>(false);

  toggleDrawer() {
    this.isSidebarOpen.update((prev) => !prev);
  }
}
