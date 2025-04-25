import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-child",
  imports: [CommonModule],
  templateUrl: "./child.component.html",
  styleUrl: "./child.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  alt = input("Logo Alt");
}
