import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIResponse } from './interfaces/api-response';
import { MealAPIService } from './services/meal-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WP1Project';

  constructor() { }

  isShowDivIf = true;
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;
  }
  
  ngOnInit(): void {}
}

