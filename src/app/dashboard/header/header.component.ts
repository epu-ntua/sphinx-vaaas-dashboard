import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  u = '/profile';
  h = '/help';
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  goToUrlprof() {

    this.router.navigate(['/profile']);
  }

  gotoUrlmanual()
  {
    this.router.navigate(['/manual']);
  }
  gotoUrlabout()
  {
    this.router.navigate(['/about']);
  }
}
