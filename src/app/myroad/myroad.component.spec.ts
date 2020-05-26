import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyroadComponent } from './myroad.component';

describe('MyroadComponent', () => {
  let component: MyroadComponent;
  let fixture: ComponentFixture<MyroadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyroadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
