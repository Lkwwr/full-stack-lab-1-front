import {Car} from "./car";
import {Employee} from "./employee";

export class Center {

  constructor(public id: number, public name: string, public cars: Car[], public employees: Employee[]) {
  }
}
