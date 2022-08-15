import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEtComponent } from './create-et.component';

describe('CreateEtComponent', () => {
  let component: CreateEtComponent;
  let fixture: ComponentFixture<CreateEtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
