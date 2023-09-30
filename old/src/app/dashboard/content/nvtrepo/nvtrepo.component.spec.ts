import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NvtrepoComponent } from './nvtrepo.component';

describe('NvtrepoComponent', () => {
  let component: NvtrepoComponent;
  let fixture: ComponentFixture<NvtrepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NvtrepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NvtrepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
