import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleWithNgClassComponent } from './style-with-ng-class.component';

describe('StyleWithNgClassComponent', () => {
  let component: StyleWithNgClassComponent;
  let fixture: ComponentFixture<StyleWithNgClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleWithNgClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleWithNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
