import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {GetCarComponent} from './components/get-car/get-car.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {AddCarComponent} from './components/add-car/add-car.component';
import {CarService} from "./services/car.service";
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'add-car', component: AddCarComponent},
  {path: `car/:id`, component: GetCarComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    GetCarComponent,
    HomePageComponent,
    AddCarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
