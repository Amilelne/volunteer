import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VProfileComponent } from './vprofile.component';

describe('VProfileComponent', () => {
  let component: VProfileComponent;
  let fixture: ComponentFixture<VProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
