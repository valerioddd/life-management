import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TabsPage } from './components/tabs/tabs.component';
import { DietaComponent } from './dieta/dieta.component';
import { HabitTrackerComponent } from './habit-tracker/habit-tracker.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'habits', component: HabitTrackerComponent },
  { path: 'dieta', component: DietaComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }