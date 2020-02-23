import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldBtnsComponent } from './field-btns.component';

describe('FieldBtnsComponent', () => {
  let component: FieldBtnsComponent;
  let fixture: ComponentFixture<FieldBtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldBtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
