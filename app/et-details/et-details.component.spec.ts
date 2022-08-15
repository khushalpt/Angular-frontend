import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtDetailsComponent } from './et-details.component';

describe('EtDetailsComponent', () => {
  let component: EtDetailsComponent;
  let fixture: ComponentFixture<EtDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
