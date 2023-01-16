import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemPageComponent } from './gem-page.component';

describe('GemPageComponent', () => {
  let component: GemPageComponent;
  let fixture: ComponentFixture<GemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GemPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
