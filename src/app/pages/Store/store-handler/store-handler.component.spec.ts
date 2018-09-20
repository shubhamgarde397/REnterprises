import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreHandlerComponent } from './store-handler.component';

describe('StoreHandlerComponent', () => {
  let component: StoreHandlerComponent;
  let fixture: ComponentFixture<StoreHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
