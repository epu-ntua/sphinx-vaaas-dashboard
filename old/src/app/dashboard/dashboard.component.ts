import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const salesData = [];
    // for (let i = 0; i < 12; i += 1) {
    //   salesData.push({
    //     x: `${i + 1}月`,
    //     y: Math.floor(Math.random() * 1000) + 200,
    //   });
    // }
  }

}
