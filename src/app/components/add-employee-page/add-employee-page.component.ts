import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {EmployeeService} from "../../services/employee.service";
import {Employee} from "../../classes/employee";
import {CenterService} from "../../services/center.service";
import {Center} from "../../classes/center";

@Component({
  selector: 'app-add-employee-page',
  templateUrl: './add-employee-page.component.html',
  styleUrls: ['./add-employee-page.component.css']
})
export class AddEmployeePageComponent {
  centers!: Center[];
  center!: Center;
  constructor(private employeeService: EmployeeService,
              private centerService: CenterService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.centerService.getCenters().subscribe((centers) => {
        this.centers = centers
      }
    )
  }


  onSubmit(last_name: string, first_name:string, salary:number, email:string, center_id:number) {
    if (last_name == "" || first_name == "" || salary == null || email == "" || center_id == null) alert("All fields should be filled!");
    else {
      this.centerService.getCenter(center_id).subscribe((center) => {
        this.center = center;
      })
      this.employeeService.addEmployee(new Employee(0, last_name, first_name, salary, email, this.center));
      this.router.navigate([""]);
    }
  }

  protected readonly Number = Number;
}
