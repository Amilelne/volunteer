import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpsComponent } from './helps.component';

describe('HelpsComponent', () => {
  let component: HelpsComponent;
  let fixture: ComponentFixture<HelpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
