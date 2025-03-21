import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemenuComponent } from './homemenu.component';

describe('HomemenuComponent', () => {
  let component: HomemenuComponent;
  let fixture: ComponentFixture<HomemenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomemenuComponent]
    });
    fixture = TestBed.createComponent(HomemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
