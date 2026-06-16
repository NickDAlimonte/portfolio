import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarApp } from './calendar-app';

describe('CalendarApp', () => {
  let component: CalendarApp;
  let fixture: ComponentFixture<CalendarApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
