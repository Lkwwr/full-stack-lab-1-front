import {Component} from '@angular/core';
import {CarService} from "../../services/car.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Car} from "../../classes/car";

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent {
  car!: Car;

  constructor(private route: ActivatedRoute,
              private carService: CarService,
              private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.carService.getCar(id).subscribe((car) => {
      this.car = car;
    })
  }

  onSubmit(id: number, brand: string, model: string, body: string, cost: number) {
    if (brand == "" || model == "" || body == "" || cost == 0) {
      alert("All fields should be filled!");
    } else {
      this.carService.saveCar(new Car(id, brand, model, body, cost));
      this.router.navigate([""]);
    }
  }

  onReset(id: number) {
    this.carService.deleteCar(id);
    this.router.navigate([''])
  }

  protected readonly Number = Number;
}
