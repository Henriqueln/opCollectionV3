/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SupportStringsListComponent } from './support-strings-list.component';

describe('SupportStringsListComponent', () => {
  let component: SupportStringsListComponent;
  let fixture: ComponentFixture<SupportStringsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportStringsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportStringsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
