import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAvatarComponent } from './user-avatar.component';
import { MatMenuModule } from '@angular/material/menu';

describe('UserAvatarComponent', () => {
  let component: UserAvatarComponent;
  let fixture: ComponentFixture<UserAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAvatarComponent],
      imports: [MatMenuModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
