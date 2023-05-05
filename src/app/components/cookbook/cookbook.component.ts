import { Component } from '@angular/core';
import { IMeal } from 'src/app/interfaces/api-response';
import { MealAPIService } from 'src/app/services/meal-api.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.css']
})
export class CookbookComponent implements OnInit{

  mealData : IMeal | any;

  constructor(private _mealAPIService:MealAPIService){}

  ngOnInit() {
    this.getMeals()
  }

  getMeals(){
    this._mealAPIService.getCookbookData().subscribe(mealData =>
      { this.mealData = mealData
    });
  }

}
