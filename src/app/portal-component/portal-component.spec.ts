import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalComponent } from './portal-component';

describe('PortalComponent', () => {
  let component: PortalComponent;
  let fixture: ComponentFixture<PortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
