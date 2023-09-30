import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomscanComponent } from './customscan.component';

describe('CustomscanComponent', () => {
  let component: CustomscanComponent;
  let fixture: ComponentFixture<CustomscanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomscanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomscanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
