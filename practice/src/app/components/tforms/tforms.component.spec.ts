import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TformsComponent } from './tforms.component';

describe('TformsComponent', () => {
  let component: TformsComponent;
  let fixture: ComponentFixture<TformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
