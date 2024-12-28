import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionConferenceComponent } from './exhibition-conference.component';

describe('ExhibitionConferenceComponent', () => {
  let component: ExhibitionConferenceComponent;
  let fixture: ComponentFixture<ExhibitionConferenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExhibitionConferenceComponent]
    });
    fixture = TestBed.createComponent(ExhibitionConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
