import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarbooksComponent } from './navbarbooks.component';

describe('NavbarbooksComponent', () => {
  let component: NavbarbooksComponent;
  let fixture: ComponentFixture<NavbarbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
