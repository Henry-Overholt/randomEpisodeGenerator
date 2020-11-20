import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomChoiceComponent } from './custom-choice.component';

describe('CustomChoiceComponent', () => {
  let component: CustomChoiceComponent;
  let fixture: ComponentFixture<CustomChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
