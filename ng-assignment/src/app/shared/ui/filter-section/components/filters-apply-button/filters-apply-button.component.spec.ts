import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersApplyButtonComponent } from './filters-apply-button.component';

describe('FiltersApplyButtonComponent', () => {
  let component: FiltersApplyButtonComponent;
  let fixture: ComponentFixture<FiltersApplyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersApplyButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersApplyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
