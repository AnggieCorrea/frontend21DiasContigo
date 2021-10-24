import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faYoutube,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer-admin',
  templateUrl: './footer-admin.component.html',
  styleUrls: ['./footer-admin.component.scss'],
})
export class FooterAdminComponent implements OnInit {
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faTwitter = faTwitter;

  constructor(private library: FaIconLibrary) {
    library.addIcons(faFacebook, faYoutube, faTwitter);
  }

  ngOnInit(): void {}
}
