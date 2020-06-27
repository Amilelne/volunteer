import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedingComponent } from './needing.component';

describe('NeedingComponent', () => {
  let component: NeedingComponent;
  let fixture: ComponentFixture<NeedingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
