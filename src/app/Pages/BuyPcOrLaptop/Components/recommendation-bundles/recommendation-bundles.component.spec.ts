import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationBundlesComponent } from './recommendation-bundles.component';

describe('RecommendationBundlesComponent', () => {
  let component: RecommendationBundlesComponent;
  let fixture: ComponentFixture<RecommendationBundlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationBundlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationBundlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
