import {Component, OnInit} from '@angular/core';
import {TasksService} from '../services/tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private taskService: TasksService) {
  }

  ngOnInit(): void {
    
  }

}
