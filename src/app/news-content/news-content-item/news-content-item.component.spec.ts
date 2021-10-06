import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsContentItemComponent } from './news-content-item.component';

describe('NewsContentItemComponent', () => {
  let component: NewsContentItemComponent;
  let fixture: ComponentFixture<NewsContentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsContentItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsContentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
