import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidStatComponent } from './covid-stat.component';

describe('CovidStatComponent', () => {
  let component: CovidStatComponent;
  let fixture: ComponentFixture<CovidStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CovidStatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CovidStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
