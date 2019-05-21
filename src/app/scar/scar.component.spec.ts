import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScarComponent } from './scar.component';

describe('ScarComponent', () => {
  let component: ScarComponent;
  let fixture: ComponentFixture<ScarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
