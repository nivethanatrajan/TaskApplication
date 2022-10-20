import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdidTaskComponent } from './edid-task.component';

describe('EdidTaskComponent', () => {
  let component: EdidTaskComponent;
  let fixture: ComponentFixture<EdidTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdidTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdidTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
