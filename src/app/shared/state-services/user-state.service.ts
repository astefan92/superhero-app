import { Injectable } from '@angular/core';
import { StateItem } from '../state/state-item';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class UserStateService {
  private currentUserItem: StateItem<User>;

  constructor() {
    this.currentUserItem = new StateItem(null);
  }

  public get currentUser(): User {
    return this.currentUserItem.getValue();
  }

  public set currentUser(newValue: User) {
    this.currentUserItem.setValue(newValue);
  }

  public get observeCurrentUser(): Observable<User> {
    return this.currentUserItem.getChangeObservable();
  }
}
