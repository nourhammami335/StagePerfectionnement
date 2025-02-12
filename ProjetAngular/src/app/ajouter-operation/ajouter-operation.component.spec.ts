import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterOperationComponent } from './ajouter-operation.component';

describe('AjouterOperationComponent', () => {
  let component: AjouterOperationComponent;
  let fixture: ComponentFixture<AjouterOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterOperationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
