import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HabitTrackerComponent } from './habit-tracker/habit-tracker.component';
import { DietaComponent } from './dieta/dieta.component';
import { AppRoutingModule } from './app-routing.module';
import { TabsPage } from './components/tabs/tabs.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [ BrowserModule, HttpClientModule, AppRoutingModule, NgbModule],
  declarations: [ AppComponent, HabitTrackerComponent, DietaComponent, TabsPage ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
