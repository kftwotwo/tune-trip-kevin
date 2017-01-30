import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class UserService {
userList: FirebaseListObservable<any[]>;
currentUserKey: string;
  constructor(private af: AngularFire) {
    this.userList = af.database.list('users');
   }

  signIn(user) {
    var userKey = this.userList.push(user).key;
    return userKey;
  }

  getUserById(userId: string) {
    return this.af.database.object('/users/' + userId);
  }
}
