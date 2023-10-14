import {Car} from "./car";
import {Center} from "./center";
import {Employee} from "./employee";
import {User} from "./user";

export class Home {

  constructor(public cars: Car[], public centers: Center[], public employees: Employee[], public users: User[]) {
  }
}
