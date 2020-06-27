import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VSignupComponent } from './vsignup.component';

describe('VSignupComponent', () => {
  let component: VSignupComponent;
  let fixture: ComponentFixture<VSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
