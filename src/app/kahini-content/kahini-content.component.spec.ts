import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KahiniContentComponent } from './kahini-content.component';

describe('KahiniContentComponent', () => {
  let component: KahiniContentComponent;
  let fixture: ComponentFixture<KahiniContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KahiniContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KahiniContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
