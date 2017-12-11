import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCelestialEventObjectComponent } from './edit-celestial-event-object.component';

describe('EditCelestialEventObjectComponent', () => {
  let component: EditCelestialEventObjectComponent;
  let fixture: ComponentFixture<EditCelestialEventObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCelestialEventObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCelestialEventObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
