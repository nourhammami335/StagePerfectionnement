import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierOperationComponent } from './modifier-operation.component';

describe('ModifierOperationComponent', () => {
  let component: ModifierOperationComponent;
  let fixture: ComponentFixture<ModifierOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierOperationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
