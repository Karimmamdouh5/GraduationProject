import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesSectionComponent } from './pictures-section.component';

describe('PicturesSectionComponent', () => {
  let component: PicturesSectionComponent;
  let fixture: ComponentFixture<PicturesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicturesSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicturesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
