import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyleadComponent } from './mylead.component';

describe('MyleadComponent', () => {
  let component: MyleadComponent;
  let fixture: ComponentFixture<MyleadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyleadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
