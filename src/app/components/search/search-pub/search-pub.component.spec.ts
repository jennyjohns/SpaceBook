import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPubComponent } from './search-pub.component';

describe('SearchPubComponent', () => {
  let component: SearchPubComponent;
  let fixture: ComponentFixture<SearchPubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
