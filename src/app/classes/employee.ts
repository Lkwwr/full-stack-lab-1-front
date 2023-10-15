import {Center} from "./center";
import {Observable} from "rxjs";

export class Employee {
  constructor(public id: number, public lastName: string, public firstName: string, public salary: number, public email: string, public center: Center) {
  }
}
