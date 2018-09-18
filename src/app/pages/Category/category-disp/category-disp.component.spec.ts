import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDispComponent } from './category-disp.component';

describe('CategoryDispComponent', () => {
  let component: CategoryDispComponent;
  let fixture: ComponentFixture<CategoryDispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryDispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryDispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
