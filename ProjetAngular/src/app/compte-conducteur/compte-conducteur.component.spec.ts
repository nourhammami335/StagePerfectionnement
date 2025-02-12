import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteConducteurComponent } from './compte-conducteur.component';

describe('CompteConducteurComponent', () => {
  let component: CompteConducteurComponent;
  let fixture: ComponentFixture<CompteConducteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompteConducteurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompteConducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
