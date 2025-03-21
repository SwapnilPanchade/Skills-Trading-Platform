import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchusersComponent } from './matchusers.component';

describe('MatchusersComponent', () => {
  let component: MatchusersComponent;
  let fixture: ComponentFixture<MatchusersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchusersComponent]
    });
    fixture = TestBed.createComponent(MatchusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
