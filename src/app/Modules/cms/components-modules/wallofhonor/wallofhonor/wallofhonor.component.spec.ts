import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallofhonorComponent } from './wallofhonor.component';

describe('WallofhonorComponent', () => {
  let component: WallofhonorComponent;
  let fixture: ComponentFixture<WallofhonorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WallofhonorComponent]
    });
    fixture = TestBed.createComponent(WallofhonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
