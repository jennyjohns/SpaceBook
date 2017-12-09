import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCeComponent } from './search-ce.component';

describe('SearchCeComponent', () => {
  let component: SearchCeComponent;
  let fixture: ComponentFixture<SearchCeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
