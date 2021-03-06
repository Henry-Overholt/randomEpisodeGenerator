import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsListComponent } from './credits-list.component';

describe('CreditsListComponent', () => {
  let component: CreditsListComponent;
  let fixture: ComponentFixture<CreditsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
