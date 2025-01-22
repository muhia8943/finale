import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JgiversComponent } from './jgivers.component';

describe('JgiversComponent', () => {
  let component: JgiversComponent;
  let fixture: ComponentFixture<JgiversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JgiversComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JgiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
