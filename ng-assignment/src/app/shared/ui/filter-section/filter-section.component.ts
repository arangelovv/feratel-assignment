import { Component, output } from "@angular/core";
import { FiltersApplyButtonComponent } from "./components/filters-apply-button/filters-apply-button.component";
import { FiltersResetButtonComponent } from "./components/filters-reset-button/filters-reset-button.component";

@Component({
  selector: "app-filter-section",
  imports: [FiltersApplyButtonComponent, FiltersResetButtonComponent],
  templateUrl: "./filter-section.component.html",
  styleUrl: "./filter-section.component.scss",
})
export class FilterSectionComponent {
  loadFilter = output<void>();
  resetFilter = output<void>();
}
