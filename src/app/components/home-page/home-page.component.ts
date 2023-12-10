import {Component} from '@angular/core';
import {CarService} from "../../services/car.service";
import {CenterService} from "../../services/center.service";
import {EmployeeService} from "../../services/employee.service";
import {UserService} from "../../services/user.service";
import {Car} from "../../classes/car";
import {Center} from "../../classes/center";
import {Employee} from "../../classes/employee";
import {User} from "../../classes/user";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  cars!: Car[];
  centers!: Center[];
  employees!: Employee[];
  users!: User[];

  constructor(private carService: CarService, private centerService: CenterService,
              private employeeService: EmployeeService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe((cars) => {
      this.cars = cars;
    })
    this.centerService.getCenters().subscribe(centers => {
      this.centers = centers;
    })
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
    })
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })
  }
}
