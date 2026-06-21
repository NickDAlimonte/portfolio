import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCalculator } from './menu-calculator';

describe('MenuCalculator', () => {
  let component: MenuCalculator;
  let fixture: ComponentFixture<MenuCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCalculator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
