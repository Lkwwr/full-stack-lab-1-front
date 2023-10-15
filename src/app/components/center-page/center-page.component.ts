import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CenterService} from "../../services/center.service";
import {Center} from "../../classes/center";
import {Employee} from "../../classes/employee";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-center-page',
  templateUrl: './center-page.component.html',
  styleUrls: ['./center-page.component.css']
})
export class CenterPageComponent {
  center!: Center;
  employees!: Employee[];

  constructor(private route: ActivatedRoute,
              private centerService: CenterService,
              private employeeService: EmployeeService,
              private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.centerService.getCenter(id).subscribe((center) => {
      this.center = center;
      // @ts-ignore
      this.centerService.getEmployeesByCenter(id).subscribe((employees) => {
        this.employees = employees;
      })
    })
  }

  onSubmit(id: number, name: string) {
    if (name == "") alert("Enter name of the center!");
    else {
      this.centerService.saveCenter(new Center(id, name, this.center.employees));
      this.router.navigate([""]);
    }
  }

  onReset(id: number) {
    this.centerService.deleteCenter(id);
    this.router.navigate(['']);
  }

  onFire(id: number) {
    this.employeeService.deleteEmployee(id);
    window.location.reload();
  }

  protected readonly Number = Number;
}
