import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { APIResponse, CookbookItem, IMeal } from 'src/app/interfaces/api-response';
import { MealAPIService } from 'src/app/services/meal-api.service';
declare var window: any;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('searchMeal')
  searchMeal!: ElementRef;

  mealData!: APIResponse;
  errMessage: any;

  constructor(private _mealAPIService: MealAPIService) { }

  ngOnInit(): void {
    this.getMealData("");
  }

  getMealData(meal: string): boolean {
    this._mealAPIService.getMealData(meal).subscribe(
      mealData => {
        this.mealData = mealData;
      }
    )
    return false;
  }

  addMeal(strMeal: string, strCategory: string, strArea: string, strMealThumb: string, strTags: string, strYoutube: string, strSource: string): boolean {
    let addMeal: IMeal;
    addMeal = new CookbookItem(strMeal, strCategory, strArea, strMealThumb, strTags, strYoutube, strSource);
    this._mealAPIService.addMealDetails(addMeal).subscribe(mealData => {
      this.mealData = mealData;
      this.clearInput();
      this.getMealData("");
    }
    );
    return false;
  }

  clearInput() {
    this.searchMeal.nativeElement.value = '';
  }
}
