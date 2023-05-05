import { Component } from '@angular/core';
import { APIResponse } from './interfaces/api-response';
import { MealAPIService } from './services/meal-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WP1Project';
}

