import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { APIResponse, IMeal } from '../interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class MealAPIService {

  private _siteURL="https://www.themealdb.com/api/json/v1/1/search.php?s="
  private _databaseURL="http://34.243.122.101/meals"

  constructor(private _http:HttpClient) { }

  getMealData(meal:string):Observable<APIResponse>{
    return this._http.get<APIResponse>(this._siteURL + meal)
    .pipe(
      tap(data => console.log('MealData/error' + JSON.stringify(data))
      ),
      catchError(this.handleError)
    )
  }

  getCookbookData():Observable<any> {
    return this._http.get<APIResponse>(this._databaseURL)
    .pipe(
      tap(data => console.log('cookbook data/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }

  addMealDetails(meal:IMeal):Observable<any> {
    return this._http.post<IMeal>(this._databaseURL, meal)
    .pipe(
     tap(data => console.log('add meal message/error' + JSON.stringify(data))
     ),
     catchError(this.handleError)
     );
    }

  deleteMealDetails(mealID:string):Observable<any> {
    let deleteURL=this._databaseURL+"/:"+mealID;
    return this._http.delete(deleteURL)
    .pipe(
      tap(data => console.log('del meal message/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }

  private handleError(err:HttpErrorResponse){
    console.log('MealAPIService: '+ err.message);
    return throwError(() => new Error('MealAPIService: '+ err.message))
  }
}
