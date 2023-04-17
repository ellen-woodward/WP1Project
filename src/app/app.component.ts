import { Component } from '@angular/core';
import { APIResponse } from './interfaces/api-response';
import { SolarAPIService } from './services/solar-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WP1Project';
  solarData:APIResponse | undefined;
  errMessage:any;
  
  constructor(private _solarAPIService:SolarAPIService){}

  getSolarData():boolean{
    this._solarAPIService.getSolarData().subscribe(
      solarData => {
        this.solarData=solarData;
        console.log("Piece of info: " + this.solarData.result.acpower);
      }
    )
    return false;
  }
}

