import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersList: User[];

  constructor() {
    this.usersList = [
      new User(0, 'usuario0', '0000', 'usuario0@user.com', 'admin', [], []),
      new User(
        1,
        'usuario1',
        '1111',
        'usuario1@user.com',
        'user',
        [0, 1, 21, 22, 23],
        [10, 11]
      ),
    ];
  }

  getUsers(): User[] {
    return this.usersList;
  }

  getUserByMail(mail: string): User {
    return this.usersList.find((usuario) => usuario.email === mail);
  }
}
