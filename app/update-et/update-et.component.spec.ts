import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEtComponent } from './update-et.component';

describe('UpdateEtComponent', () => {
  let component: UpdateEtComponent;
  let fixture: ComponentFixture<UpdateEtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
