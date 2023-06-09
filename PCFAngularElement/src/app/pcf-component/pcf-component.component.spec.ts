import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcfComponentComponent } from './pcf-component.component';

describe('PcfComponentComponent', () => {
  let component: PcfComponentComponent;
  let fixture: ComponentFixture<PcfComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcfComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcfComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
