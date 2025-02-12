import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheOperationComponent } from './recherche-operation.component';

describe('RechercheOperationComponent', () => {
  let component: RechercheOperationComponent;
  let fixture: ComponentFixture<RechercheOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechercheOperationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
