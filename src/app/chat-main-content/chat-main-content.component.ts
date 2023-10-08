import { Component } from '@angular/core';
import { IUser } from '../model/users';

@Component({
  selector: 'jac-chat-main-content',
  templateUrl: './chat-main-content.component.html',
  styleUrls: ['./chat-main-content.component.scss']
})
export class ChatMainContentComponent {
  selectedUser: string = '';

  onUserSelected(user: IUser) {
    this.selectedUser = user.recipientId;
  }
}
