import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KabyoContentComponent } from './kabyo-content.component';

describe('KabyoContentComponent', () => {
  let component: KabyoContentComponent;
  let fixture: ComponentFixture<KabyoContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KabyoContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KabyoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
