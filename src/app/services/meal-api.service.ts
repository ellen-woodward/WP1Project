import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { APIResponse } from '../interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class MealAPIService {

  private _siteURL="https://www.themealdb.com/api/json/v1/1/search.php?s="
  
  constructor(private _http:HttpClient) { }

  getMealData(meal:string):Observable<APIResponse>{
    return this._http.get<APIResponse>(this._siteURL + meal)
    .pipe(
      tap(data => console.log('MealData/error' + JSON.stringify(data))
      ),
      catchError(this.handleError)
    )
  }
  private handleError(err:HttpErrorResponse){
    console.log('MealAPIService: '+ err.message);
    return throwError(() => new Error('MealAPIService: '+ err.message))
  }
}
