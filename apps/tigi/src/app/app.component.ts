import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NxWelcomeComponent } from "./nx-welcome.component";
import { ChildComponent } from "./components/child.component";

@Component({
  imports: [NxWelcomeComponent, RouterModule, ChildComponent],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent   {
 
 
}
