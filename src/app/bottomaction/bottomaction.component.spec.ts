import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomactionComponent } from './bottomaction.component';

describe('BottomactionComponent', () => {
  let component: BottomactionComponent;
  let fixture: ComponentFixture<BottomactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
