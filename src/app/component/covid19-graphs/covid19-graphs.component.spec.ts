import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19GraphsComponent } from './covid19-graphs.component';

describe('Covid19GraphsComponent', () => {
  let component: Covid19GraphsComponent;
  let fixture: ComponentFixture<Covid19GraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Covid19GraphsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Covid19GraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
