import { Component, HostBinding } from '@angular/core';
import { DarkmodeToggleService } from './services/darkmode-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @HostBinding('class.dark') get mode() {
    return this.flagIsDarkModeEnabled
  }

  title = 'Combination.design';
  flagIsDarkModeEnabled: boolean = false

  constructor(private toggleService: DarkmodeToggleService) {
    this.toggleService.toggle$.subscribe(state => {
      this.flagIsDarkModeEnabled = state;
    });
  }
}
