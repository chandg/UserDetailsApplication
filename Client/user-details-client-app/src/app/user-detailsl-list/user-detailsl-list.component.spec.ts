import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailslListComponent } from './user-detailsl-list.component';

describe('UserDetailslListComponent', () => {
  let component: UserDetailslListComponent;
  let fixture: ComponentFixture<UserDetailslListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailslListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailslListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
