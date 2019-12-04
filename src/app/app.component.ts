import { Component, OnInit } from "@angular/core";
import { UsersService } from "./users.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [UsersService]
})
export class AppComponent implements OnInit {
  inactiveUsers: string[];
  activeUsers: string[];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.inactiveUsers = this.usersService.inactiveUsers;
    this.activeUsers = this.usersService.activeUsers;
  }
}
