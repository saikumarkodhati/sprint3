import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderUiComponent } from './order-ui.component';

describe('OrderUiComponent', () => {
  let component: OrderUiComponent;
  let fixture: ComponentFixture<OrderUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
