import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSingleComponent } from './menu-single.component';

describe('MenuSingleComponent', () => {
  let component: MenuSingleComponent;
  let fixture: ComponentFixture<MenuSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSingleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
