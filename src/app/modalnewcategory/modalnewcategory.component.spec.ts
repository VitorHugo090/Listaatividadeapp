import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalnewcategoryComponent } from './modalnewcategory.component';

describe('ModalnewcategoryComponent', () => {
  let component: ModalnewcategoryComponent;
  let fixture: ComponentFixture<ModalnewcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalnewcategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalnewcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
