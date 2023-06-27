import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatilsPageComponent } from './deatils-page.component';

describe('DeatilsPageComponent', () => {
  let component: DeatilsPageComponent;
  let fixture: ComponentFixture<DeatilsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeatilsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeatilsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
