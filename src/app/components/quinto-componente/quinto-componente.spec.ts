import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuintoComponente } from './quinto-componente';

describe('QuintoComponente', () => {
  let component: QuintoComponente;
  let fixture: ComponentFixture<QuintoComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuintoComponente]
    })
      .compileComponents();

    fixture = TestBed.createComponent(QuintoComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
