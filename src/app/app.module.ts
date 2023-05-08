import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MealAPIService } from './services/meal-api.service';
import { SearchComponent } from './components/search/search.component';
import { CookbookComponent } from './components/cookbook/cookbook.component';
import { AboutComponent } from './components/about/about.component';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';

const routes:Routes=[
  { path:'', component:SearchComponent},
  { path:'about', component:AboutComponent},
  { path:'cookbook', component:CookbookComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CookbookComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [MealAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
