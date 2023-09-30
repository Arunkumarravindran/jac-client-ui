import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'jac-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Output() userSelected = new EventEmitter<string>();
  userList: any[] = [
    {
      name: 'User 1',
      imageUrl: 'path/to/user1.jpg',
      lastMessage: 'Hello there!',
    },
    {
      name: 'User 2',
      imageUrl: 'path/to/user2.jpg',
      lastMessage: 'How are you?',
    },
    // Add more user data as needed
  ];

  onUserClick(user: string) {
    this.userSelected.emit(user);
  }
}
