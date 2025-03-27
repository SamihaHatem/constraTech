import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelsdiscussionComponent } from './panelsdiscussion.component';

describe('PanelsdiscussionComponent', () => {
  let component: PanelsdiscussionComponent;
  let fixture: ComponentFixture<PanelsdiscussionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelsdiscussionComponent]
    });
    fixture = TestBed.createComponent(PanelsdiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
