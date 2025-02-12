import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureDuConducteurComponent } from './voiture-du-conducteur.component';

describe('VoitureDuConducteurComponent', () => {
  let component: VoitureDuConducteurComponent;
  let fixture: ComponentFixture<VoitureDuConducteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoitureDuConducteurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoitureDuConducteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
