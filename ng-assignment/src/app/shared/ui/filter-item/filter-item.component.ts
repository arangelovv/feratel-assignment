import { Component, input } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-filter-item",
  imports: [ReactiveFormsModule],
  templateUrl: "./filter-item.component.html",
  styleUrl: "./filter-item.component.scss",
})
export class FilterItemComponent {
  lable = input<string>("input lable");
  placeholder = input<string>("Example");
  disabled = input<boolean>(false);
  autocomplete = input<boolean>(true);

  defaultFormControl = new FormControl<string>("");
  formControl = input<FormControl<string | null>>(this.defaultFormControl);
}
