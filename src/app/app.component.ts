import { Component, OnInit } from "@angular/core";
import { ThemeService } from "./theme/theme.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) {
    console.log("app com constructor");
  }

  ngOnInit() {
    console.log("app ngOnInit");
  }
  toggle() {
    console.log("app component");
    const active = this.themeService.getActiveTheme();
    if (active.name === "light") {
      this.themeService.setTheme("dark");
    } else {
      this.themeService.setTheme("light");
    }
  }
}
