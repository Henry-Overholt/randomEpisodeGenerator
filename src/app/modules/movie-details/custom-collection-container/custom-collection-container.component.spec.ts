import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCollectionContainerComponent } from './custom-collection-container.component';

describe('CustomCollectionContainerComponent', () => {
  let component: CustomCollectionContainerComponent;
  let fixture: ComponentFixture<CustomCollectionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCollectionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCollectionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
