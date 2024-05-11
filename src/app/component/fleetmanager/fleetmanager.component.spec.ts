import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetmanagerComponent } from './fleetmanager.component';

describe('FleetmanagerComponent', () => {
  let component: FleetmanagerComponent;
  let fixture: ComponentFixture<FleetmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetmanagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleetmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
