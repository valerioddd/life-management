import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { CategoryResult } from '../model/category'
import { DietaComponent } from '../dieta/dieta.component';

@Component({
  selector: 'app-habit-tracker',
  templateUrl: './habit-tracker.component.html',
  styleUrls: ['./habit-tracker.component.scss']
})
export class HabitTrackerComponent implements OnInit {

  cat: CategoryResult | undefined;
  constructor(private client: CategoryService) {
    client.getCategories().subscribe(result => {
      this.cat = result;
    })
   }

  ngOnInit(): void {}

}
