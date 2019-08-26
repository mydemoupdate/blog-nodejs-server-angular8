import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailPostsComponent } from './admin-detail-posts.component';

describe('AdminDetailPostsComponent', () => {
  let component: AdminDetailPostsComponent;
  let fixture: ComponentFixture<AdminDetailPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDetailPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetailPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
