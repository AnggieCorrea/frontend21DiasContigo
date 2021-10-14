import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContemplationConsideration } from '../models/ContemplationConsideration';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersList: User[];

  constructor() {
    this.usersList = [
      new User(0, 'usuario0', '0000', 'usuario0@user.com', 'admin', [], [], []),
      new User(
        1,
        'usuario1',
        '1111',
        'usuario1@user.com',
        'user',
        [0, 1, 21, 22, 23],
        [],
        [
          new ContemplationConsideration(
            0,
            'Reflexión de contemplación 1',
            1,
            'recording',
            new Date('2019-03-01'),
            '',
            '',
            1
          ),
          new ContemplationConsideration(
            1,
            'Reflexión de contemplación 2',
            2,
            'recording',
            new Date('2019-03-01'),
            '',
            '',
            1
          ),
          new ContemplationConsideration(
            2,
            'Reflexión de contemplación 3',
            3,
            'recording',
            new Date('2019-03-01'),
            '',
            '',
            1
          ),
          new ContemplationConsideration(
            3,
            'Reflexión de contemplación 4',
            4,
            'text',
            new Date('2019-03-01'),
            '',
            '',
            1
          ),
          new ContemplationConsideration(
            4,
            'Reflexión de contemplación 5',
            5,
            'recording',
            new Date('2019-03-01'),
            '',
            '',
            1
          ),
        ]
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
