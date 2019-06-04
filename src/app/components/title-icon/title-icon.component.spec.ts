import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleIconComponent } from './title-icon.component';

describe('TitleIconComponent', () => {
  let component: TitleIconComponent;
  let fixture: ComponentFixture<TitleIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
