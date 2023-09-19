import {Component} from '@angular/core';
import {CarService} from "../../services/car.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-get-car',
  templateUrl: './get-car.component.html',
  styleUrls: ['./get-car.component.css']
})
export class GetCarComponent {
  car: any;

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
    this.carService.saveCar(id, brand, model, body, cost);
  }

  onReset(id: number) {
    this.carService.deleteCar(id);
    this.router.navigate([''])
  }

  protected readonly Number = Number;
}
