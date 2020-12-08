import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAnimationComponent } from './title-animation.component';

describe('TitleAnimationComponent', () => {
  let component: TitleAnimationComponent;
  let fixture: ComponentFixture<TitleAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
