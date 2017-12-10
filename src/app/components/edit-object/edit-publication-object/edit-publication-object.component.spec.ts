import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPublicationObjectComponent } from './edit-publication-object.component';

describe('EditPublicationObjectComponent', () => {
  let component: EditPublicationObjectComponent;
  let fixture: ComponentFixture<EditPublicationObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPublicationObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPublicationObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
