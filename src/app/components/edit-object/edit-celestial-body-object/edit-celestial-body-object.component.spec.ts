import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCelestialBodyObjectComponent } from './edit-celestial-body-object.component';

describe('EditCelestialBodyObjectComponent', () => {
  let component: EditCelestialBodyObjectComponent;
  let fixture: ComponentFixture<EditCelestialBodyObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCelestialBodyObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCelestialBodyObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
