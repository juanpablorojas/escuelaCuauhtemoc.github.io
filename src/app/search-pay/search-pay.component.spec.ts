import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPayComponent } from './search-pay.component';

describe('SearchPayComponent', () => {
  let component: SearchPayComponent;
  let fixture: ComponentFixture<SearchPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
