import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ETListComponent } from './et-list.component';

describe('ETListComponent', () => {
  let component: ETListComponent;
  let fixture: ComponentFixture<ETListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ETListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ETListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
