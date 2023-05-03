import { Component } from '@angular/core';
import { APIResponse } from 'src/app/interfaces/api-response';
import { MealAPIService } from 'src/app/services/meal-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  mealData!:APIResponse;
  errMessage:any;
  
  constructor(private _mealAPIService:MealAPIService){}

  getMealData(meal:string):boolean{
    this._mealAPIService.getMealData(meal).subscribe(
      mealData => {
        this.mealData=mealData;
        //console.log("Piece of info: " + this.mealData);
      }
    )
    return false;
  }
}
