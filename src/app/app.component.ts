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
  // mealData!:APIResponse;
  // errMessage:any;
  
  // constructor(private _mealAPIService:MealAPIService){}

  // getMealData():boolean{
  //   this._mealAPIService.getMealData().subscribe(
  //     mealData => {
  //       this.mealData=mealData;
  //       //console.log("Piece of info: " + this.mealData);
  //     }
  //   )
  //   return false;
  // }
}

