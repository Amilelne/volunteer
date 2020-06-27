import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VSigninComponent } from './vsignin.component';

describe('LoginComponent', () => {
  let component: VSigninComponent;
  let fixture: ComponentFixture<VSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
