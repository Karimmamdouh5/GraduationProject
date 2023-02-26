import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSnackBarComponent } from './cart-snack-bar.component';

describe('CartSnackBarComponent', () => {
  let component: CartSnackBarComponent;
  let fixture: ComponentFixture<CartSnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartSnackBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
