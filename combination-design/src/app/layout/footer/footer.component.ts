import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  behavnceIcon = '/assets/images/behance.svg'
  twitterIcon = '/assets/images/twitter.svg'
  linkedinIcon = '/assets/images/linkedin.svg'
  instagramIcon = '/assets/images/instagram.svg'
  dribbleIcon = '/assets/images/dribble.svg'

  constructor() { }

  ngOnInit(): void {
  }

}
