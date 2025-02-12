import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuConducteurComponent } from './menu-conducteur.component';

describe('MenuConducteurComponent', () => {
  let component: MenuConducteurComponent;
  let fixture: ComponentFixture<MenuConducteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuConducteurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuConducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
