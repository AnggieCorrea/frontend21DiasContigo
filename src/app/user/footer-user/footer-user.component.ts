import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faYoutube,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer-user',
  templateUrl: './footer-user.component.html',
  styleUrls: ['./footer-user.component.scss']
})
export class FooterUserComponent implements OnInit {
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faTwitter = faTwitter;

  constructor() {
  }

  ngOnInit(): void {}
}
