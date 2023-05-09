import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommedntaioSectionComponent } from './recommedntaio-section.component';

describe('RecommedntaioSectionComponent', () => {
  let component: RecommedntaioSectionComponent;
  let fixture: ComponentFixture<RecommedntaioSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommedntaioSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommedntaioSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
