import {Component} from '@angular/core';
import {User} from "../../classes/user";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  users!: User[];

  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  onSubmit(name: string, username: string, password: string) {
    if (name == "" || username == "" || password == "") alert("All fields should be filled!");
    else {
      let registered = false;
      for (let user of this.users) {
        if (user.username == username) registered = true;
      }
      if (registered) alert("Username is already taken!");
      else {
        let user = new User(0, name, username, password, "user");
        this.userService.addUser(user);
        alert("User has been created!");
        this.router.navigate(['/login']);
      }
    }
  }

  onReset() {
    this.router.navigate(['/login']);
  }
}
