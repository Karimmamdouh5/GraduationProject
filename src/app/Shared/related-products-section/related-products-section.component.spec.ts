import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedProductsSectionComponent } from './related-products-section.component';

describe('RelatedProductsSectionComponent', () => {
  let component: RelatedProductsSectionComponent;
  let fixture: ComponentFixture<RelatedProductsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedProductsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedProductsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
