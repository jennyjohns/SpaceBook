import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNasaDetailComponent } from './search-nasa-detail.component';

describe('SearchNasaDetailComponent', () => {
  let component: SearchNasaDetailComponent;
  let fixture: ComponentFixture<SearchNasaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNasaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNasaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
