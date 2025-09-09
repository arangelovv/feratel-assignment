import { Component } from "@angular/core";
import { FilterSectionComponent, FilterItemComponent } from "../../shared/ui";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-example-page",
  imports: [FilterSectionComponent, FilterItemComponent],
  templateUrl: "./example-page.component.html",
  styleUrl: "./example-page.component.scss",
})
export class ExamplePageComponent {
  exampleControl1 = new FormControl<string>("", { nonNullable: true });
  exampleControl2 = new FormControl<string>("", { nonNullable: true });
  exampleControl3 = new FormControl<string>("", { nonNullable: true });

  onReset() {
    this.exampleControl1.reset();
    this.exampleControl2.reset();
    this.exampleControl3.reset();
    console.warn("reset filters");
  }

  onApply() {
    const filters = {
      exampleControl1: this.exampleControl1.value,
      exampleControl2: this.exampleControl2.value,
      exampleControl3: this.exampleControl3.value,
    };
    console.warn("apply filters", filters);
  }
}
