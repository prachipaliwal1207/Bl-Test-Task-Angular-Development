import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidLocationWiseDataComponent } from './covid-location-wise-data.component';

describe('CovidLocationWiseDataComponent', () => {
  let component: CovidLocationWiseDataComponent;
  let fixture: ComponentFixture<CovidLocationWiseDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CovidLocationWiseDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CovidLocationWiseDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
