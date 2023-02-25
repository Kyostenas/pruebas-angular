import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcoBotonesComponent } from './marco-botones.component';

describe('MarcoBotonesComponent', () => {
  let component: MarcoBotonesComponent;
  let fixture: ComponentFixture<MarcoBotonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcoBotonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcoBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
