import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {CarPageComponent} from './components/car-page/car-page.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {AddCarPageComponent} from './components/add-car-page/add-car-page.component';
import {CarService} from "./services/car.service";
import {FormsModule} from "@angular/forms";
import {LoginPageComponent} from './components/login-page/login-page.component';
import {AccountPageComponent} from './components/account-page/account-page.component';
import {EmployeePageComponent} from './components/employee-page/employee-page.component';
import {RegistrationPageComponent} from './components/registration-page/registration-page.component';
import {AddEmployeePageComponent} from './components/add-employee-page/add-employee-page.component';
import {AddCenterPageComponent} from './components/add-center-page/add-center-page.component';
import {CenterPageComponent} from './components/center-page/center-page.component';
import {AddUserPageComponent} from './components/add-user-page/add-user-page.component';
import {CenterService} from "./services/center.service";
import {EmployeeService} from "./services/employee.service";

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'car/add', component: AddCarPageComponent},
  {path: 'car/:id', component: CarPageComponent},
  {path: 'center/add', component: AddCenterPageComponent},
  {path: 'center/:id', component: CenterPageComponent},
  {path: 'employee/add', component: AddEmployeePageComponent},
  {path: 'employee/:id', component: EmployeePageComponent},
  {path: 'user/add', component: AddUserPageComponent},
  {path: 'user/:id', component: AccountPageComponent},
  {path: 'register', component: RegistrationPageComponent},
  {path: 'login', component: LoginPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CarPageComponent,
    HomePageComponent,
    AddCarPageComponent,
    LoginPageComponent,
    AccountPageComponent,
    EmployeePageComponent,
    RegistrationPageComponent,
    AddEmployeePageComponent,
    AddCenterPageComponent,
    CenterPageComponent,
    AddUserPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [CarService, CenterService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
