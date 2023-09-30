import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMainContentComponent } from './chat-main-content.component';

describe('ChatMainContentComponent', () => {
  let component: ChatMainContentComponent;
  let fixture: ComponentFixture<ChatMainContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatMainContentComponent]
    });
    fixture = TestBed.createComponent(ChatMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
