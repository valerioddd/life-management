import { Component, OnInit } from '@angular/core';
import { HabitTrackerComponent } from '../habit-tracker/habit-tracker.component';

@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.component.html',
  styleUrls: ['./dieta.component.scss']
})
export class DietaComponent implements OnInit {

  component = HabitTrackerComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
