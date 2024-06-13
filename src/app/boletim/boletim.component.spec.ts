/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BoletimComponent } from './boletim.component';

describe('BoletimComponent', () => {
  let component: BoletimComponent;
  let fixture: ComponentFixture<BoletimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
