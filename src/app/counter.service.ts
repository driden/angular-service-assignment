import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class CounterService {
  private activeToInactive: number = 0;
  private inactiveToActive: number = 0;

  markUserAsActive() {
    console.log("Amount of users inactive->active ", ++this.inactiveToActive);
  }

  markUserAsInactive() {
    console.log("Amount of users active->inactive ", ++this.activeToInactive);
  }
}
