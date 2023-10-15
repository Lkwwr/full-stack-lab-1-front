import {Center} from "./center";
import {Observable} from "rxjs";

export class Employee {
  constructor(public id: number, public last_name: string, public first_name: string, public salary: number, public email: string, public center: Center) {
  }
}
