import { Component } from '@angular/core';

@Component({
  selector: 'jac-chat-main-content',
  templateUrl: './chat-main-content.component.html',
  styleUrls: ['./chat-main-content.component.scss']
})
export class ChatMainContentComponent {
  selectedUser: string | null = null;

  onUserSelected(user: string) {
    this.selectedUser = user;
  }
}
