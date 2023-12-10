import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../classes/user";

@Component({
  selector: 'app-add-user-page',
  templateUrl: './add-user-page.component.html',
  styleUrls: ['./add-user-page.component.css']
})
export class AddUserPageComponent {
  constructor(private userService: UserService,
              private router: Router) {
  }

  onSubmit(name: string, username: string, password: string) {
    if (name == "" || username == "" || password == null) alert("All fields should be filled!");
    else {
      this.userService.addUser(new User(0, name, username, password));
      this.router.navigate([""]);
    }
  }

  protected readonly Number = Number;
}
