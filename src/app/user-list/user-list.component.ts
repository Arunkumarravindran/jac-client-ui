import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserListService } from '../service/user-list.service';
import { Observable, filter, map, of, tap } from 'rxjs';
import { IUser } from '../model/users';

@Component({
  selector: 'jac-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Output() userSelected = new EventEmitter<IUser>();
  searchText = '';
  userList : Observable<IUser[]>= of([]);
constructor(private userListService : UserListService){}

  ngOnInit(): void {
    this.userList = this.userListService.getUsers();
  }

  onUserClick(user: IUser) {
    this.userSelected.emit(user);
  }

  get filteredUserList(): Observable<IUser[]> {
    // Implement filtering logic based on the searchText
    return this.userList.pipe(map(users => users.filter(user => user.name.toLowerCase().includes(this.searchText.toLocaleLowerCase()))));
  }

  clearSearch(): void {
    this.searchText = '';
  }
  
}
