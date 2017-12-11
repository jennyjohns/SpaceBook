import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserObjectComponent } from './edit-user-object.component';

describe('EditUserObjectComponent', () => {
  let component: EditUserObjectComponent;
  let fixture: ComponentFixture<EditUserObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
