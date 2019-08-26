import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListPostsComponent } from './admin-list-posts.component';

describe('AdminListPostsComponent', () => {
  let component: AdminListPostsComponent;
  let fixture: ComponentFixture<AdminListPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
