import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../../classes/employee";
import {EmployeeService} from "../../services/employee.service";
import {Center} from "../../classes/center";
import {CenterService} from "../../services/center.service";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent {
  center!: Center;
  employee!: Employee;
  centers!: Center[];

  constructor(private route: ActivatedRoute,
              private employeeService: EmployeeService,
              private centerService: CenterService,
              private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.employeeService.getEmployee(id).subscribe((employee) => {
      this.employee = employee;
      this.centerService.getCenters().subscribe((centers) => {
        this.centers = centers;
      })
    })
  }

  onSubmit(id: number, lastName: string, firstName: string, salary: number, email: string, centerId: number) {
    if (lastName == "" || firstName == "" || salary == null || email == "" || centerId == null) {
      alert("All fields should be filled!");
    } else {
      this.centerService.getCenter(centerId).subscribe((center) => {
        this.center = center;
        this.saveEmployee(id, lastName, firstName, salary, email);
      });
    }
  }

  saveEmployee(id: number, lastName: string, firstName: string, salary: number, email: string) {
    if (this.center) {
      this.employeeService.saveEmployee(new Employee(id, lastName, firstName, salary, email, this.center, this.center.id))
        .subscribe(() => {
          this.router.navigate([""]);
        });
    }
  }

  onReset(id: number) {
    this.employeeService.deleteEmployee(id);
    this.router.navigate([''])
  }

  protected readonly Number = Number;
}
