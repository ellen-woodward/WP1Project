import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MealAPIService } from './services/meal-api.service';
import { SearchComponent } from './components/search/search.component';
import { CookbookComponent } from './components/cookbook/cookbook.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CookbookComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MealAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
