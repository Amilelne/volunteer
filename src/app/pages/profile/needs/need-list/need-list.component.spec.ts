import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedListComponent } from './need-list.component';

describe('NeedListComponent', () => {
  let component: NeedListComponent;
  let fixture: ComponentFixture<NeedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
