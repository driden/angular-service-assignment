import { CounterService } from "./counter.service";

export class UsersService {
  inactiveUsers: string[] = ["Chris", "Manu"];
  activeUsers: string[] = ["Max", "Anna"];

  constructor(private counterService: CounterService) {}

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.markUserAsInactive();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.markUserAsActive();
  }
}
