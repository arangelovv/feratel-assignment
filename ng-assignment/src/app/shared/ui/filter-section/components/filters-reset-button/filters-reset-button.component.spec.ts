import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersResetButtonComponent } from './filters-reset-button.component';

describe('FiltersResetButtonComponent', () => {
  let component: FiltersResetButtonComponent;
  let fixture: ComponentFixture<FiltersResetButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersResetButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersResetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
