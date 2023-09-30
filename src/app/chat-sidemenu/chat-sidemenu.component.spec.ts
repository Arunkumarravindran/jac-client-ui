import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSidemenuComponent } from './chat-sidemenu.component';

describe('ChatSidemenuComponent', () => {
  let component: ChatSidemenuComponent;
  let fixture: ComponentFixture<ChatSidemenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatSidemenuComponent]
    });
    fixture = TestBed.createComponent(ChatSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
