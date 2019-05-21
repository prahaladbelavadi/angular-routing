import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NalaComponent } from './nala.component';

describe('NalaComponent', () => {
  let component: NalaComponent;
  let fixture: ComponentFixture<NalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
