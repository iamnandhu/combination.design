import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class NavbarComponent implements OnInit {
  @ViewChild('mobileMenu') mobileMenu: ElementRef | undefined;
  @ViewChild('menuIcon') menuIcon: ElementRef | undefined;
  
  hamIcon = '/assets/images/navbar_ham.svg';
  logo = '/assets/images/logo_mobile.svg';
  mobileSidebarDropdownArrowDown = '/assets/images/dropdownArrowDown.svg';
  mobileSidebarDropdownArrowUp = '/assets/images/dropdownArrowUp.svg';

  flagIsMobileNavOpen: boolean = false;
  flagIsOptionOneDropdownVisible: boolean = false;

  constructor(
    private _renderer: Renderer2
  ) { 
    this._renderer.listen('window', 'click', (e: Event) => {
      console.log(e.target)

      if (e.target !== this.mobileMenu?.nativeElement && e.target !== this.menuIcon?.nativeElement){
        this.flagIsMobileNavOpen = false;
      }

    })
  }

  ngOnInit(): void {
  }

  toggleMobileNav(event: any) {
    event.stopPropagation()
    this.flagIsMobileNavOpen = !this.flagIsMobileNavOpen;
  }

  toggleOptionOneDropdownVisibility() {
    this.flagIsOptionOneDropdownVisible = !this.flagIsOptionOneDropdownVisible;
  }

}
