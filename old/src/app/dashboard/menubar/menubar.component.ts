import {Component, OnInit} from '@angular/core';
import {MenubarService} from '../../services/menubar.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  menuItems: any[] = [];
  test = 6;

  constructor(private menuBarService: MenubarService, public router: Router) {
    this.menuItems = this.menuBarService.menuitems;
  }

  ngOnInit(): void {
  }

  returnFloor(x: number) {
    return Math.floor(x);
  }

  returnWidth(x: number) {
    if ((24 % x) == 0) {
      return 24 / x;
    } else {
      return Math.floor(24 / x);
    }
  }

  goToUrl(url: string) {
    this.router.navigate([url]);
  }
}
