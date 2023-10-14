import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CenterService} from "../../services/center.service";
import {Center} from "../../classes/center";

@Component({
  selector: 'app-center-page',
  templateUrl: './add-center-page.component.html',
  styleUrls: ['./add-center-page.component.css']
})
export class AddCenterPageComponent {
  constructor(private centerService: CenterService,
              private router: Router) {
  }

  onSubmit(name: string) {
    this.centerService.addCenter(new Center(0, name, [], []));
    this.router.navigate([""]);
  }

  protected readonly Number = Number;
}
