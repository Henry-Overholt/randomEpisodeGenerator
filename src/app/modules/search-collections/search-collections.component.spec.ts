import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCollectionsComponent } from './search-collections.component';

describe('SearchCollectionsComponent', () => {
  let component: SearchCollectionsComponent;
  let fixture: ComponentFixture<SearchCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
