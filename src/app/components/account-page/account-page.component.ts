import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../classes/user";

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent {
  user!: User;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.userService.getUser(id).subscribe((user) => {
      this.user = user;
    })
  }

  onSubmit(id: number, name: string, username: string, password: string, role: string) {
    if (name == "" || username == "" || password == null) alert("All fields should be filled!");
    else {
      this.userService.saveUser(new User(id, name, username, password, role));
      this.router.navigate([""]);
    }
  }

  onReset(id: number) {
    this.userService.deleteUser(id);
    if (localStorage.getItem("userId") != String(id)) this.router.navigate(['']);
    else {
      localStorage.removeItem("userId");
      this.router.navigate(['/login']);
    }
  }

  protected readonly Number = Number;
}
