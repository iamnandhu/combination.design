import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeToggleService {
  private toggleSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public toggle$: Observable<boolean> = this.toggleSubject.asObservable();
  flagIsDarkModeEnabled: boolean = true

  constructor() { 
    this.updateDarkModeStateFromLocalStorage();
  }

  updateToggleState(newState: boolean): void {
    this.flagIsDarkModeEnabled = newState;
    localStorage.setItem('isDarkModeEnabled', JSON.stringify(this.flagIsDarkModeEnabled));
    this.toggleSubject.next(this.flagIsDarkModeEnabled);
  }

  updateDarkModeStateFromLocalStorage() {
    let isDarkModeEnabled: string = localStorage.getItem('isDarkModeEnabled') as string;

    if(!isDarkModeEnabled) {
      return;
    }
    this.flagIsDarkModeEnabled = JSON.parse(isDarkModeEnabled);
    this.updateToggleState(this.flagIsDarkModeEnabled);
    return
  }
}
