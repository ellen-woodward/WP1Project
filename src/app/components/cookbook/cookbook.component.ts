import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMeal } from 'src/app/interfaces/api-response';
import { MealAPIService } from 'src/app/services/meal-api.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.css']
})
export class CookbookComponent implements OnInit {
  @Output() mealDeletedEvent = new EventEmitter<string>()

  @Input()
  mealData: IMeal | any;

  constructor(private _mealAPIService: MealAPIService) { }

  ngOnInit() {
    this.getMeals();
  }

  getMeals() {
    this._mealAPIService.getCookbookData().subscribe(mealData => {
      this.mealData = mealData
    });
  }

  deleteMeal(mealID: string) {
    this._mealAPIService.deleteMealDetails(mealID).subscribe(result => {
      console.log(result);
      this.getMeals();
    });
    this.mealDeletedEvent.emit("Meal got deleted");
  }
}
