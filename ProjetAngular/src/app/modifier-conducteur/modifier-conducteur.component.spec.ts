import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierConducteurComponent } from './modifier-conducteur.component';

describe('ModifierConducteurComponent', () => {
  let component: ModifierConducteurComponent;
  let fixture: ComponentFixture<ModifierConducteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierConducteurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierConducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
