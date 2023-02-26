import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSinglePageComponent } from './shop-single-page.component';

describe('ShopSinglePageComponent', () => {
  let component: ShopSinglePageComponent;
  let fixture: ComponentFixture<ShopSinglePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopSinglePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
