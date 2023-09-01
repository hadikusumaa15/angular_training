import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SephirothComponent } from './sephiroth.component';

describe('SephirothComponent', () => {
  let component: SephirothComponent;
  let fixture: ComponentFixture<SephirothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SephirothComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SephirothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
