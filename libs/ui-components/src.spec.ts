import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Src } from './src';

describe('Src', () => {
  let component: Src;
  let fixture: ComponentFixture<Src>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Src],
    }).compileComponents();

    fixture = TestBed.createComponent(Src);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
