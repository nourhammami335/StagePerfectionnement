import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheConducteurComponent } from './recherche-conducteur.component';

describe('RechercheConducteurComponent', () => {
  let component: RechercheConducteurComponent;
  let fixture: ComponentFixture<RechercheConducteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechercheConducteurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheConducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
