import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { APIResponse } from '../interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class SolarAPIService {

  private _siteURL="https://www.eu.solaxcloud.com:9443/proxy/api/getRealtimeInfo.do?tokenId=20210919215139742116264&sn=SWFPABQDFS"
  constructor(private _http:HttpClient) { }

  getSolarData():Observable<APIResponse>{
    return this._http.get<APIResponse>(this._siteURL)
    .pipe(
      tap(data => console.log('SolarData/error' + JSON.stringify(data))
      ),
      catchError(this.handleError)
    )
  }
  private handleError(err:HttpErrorResponse){
    console.log('SolarAPIService: '+ err.message);
    return throwError(() => new Error('SolarAPIService: '+ err.message))
  }
}
