import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimbaComponent } from './simba.component';

describe('SimbaComponent', () => {
  let component: SimbaComponent;
  let fixture: ComponentFixture<SimbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
