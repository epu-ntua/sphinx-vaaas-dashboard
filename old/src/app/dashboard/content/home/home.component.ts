import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
homeItems : any [] = [];
  constructor(private homeService: HomeService) {
    this.homeItems = this.homeService.homeItems;
  }

  ngOnInit(): void {
  }

}
