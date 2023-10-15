import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CenterService} from "../../services/center.service";
import {Center} from "../../classes/center";

@Component({
  selector: 'app-center-page',
  templateUrl: './center-page.component.html',
  styleUrls: ['./center-page.component.css']
})
export class CenterPageComponent {
  center!: Center;

  constructor(private route: ActivatedRoute,
              private centerService: CenterService,
              private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.centerService.getCenter(id).subscribe((center) => {
      this.center = center;
    })
  }

  onSubmit(id: number, name: string) {
    this.centerService.saveCenter(new Center(id, name, this.center.employees));
    this.router.navigate([""]);
  }

  onReset(id: number) {
    this.centerService.deleteCenter(id);
    this.router.navigate([''])
  }

  protected readonly Number = Number;
}
