import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable }                         from 'rxjs';
import { USER }                               from './interfaces';
import { UserService }                        from './services';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styles: [`
      [nz-button] {
          margin-right: 8px;
          margin-bottom: 12px;
      }
  `]
})
export class AppComponent {

  users$: Observable<USER[] | null> = this.userService.getUsers();

  constructor(
    private userService: UserService
  ) {
  }

  getUsers = () => this.users$ = this.userService.getUsers();
  getError = () => this.users$ = this.userService.getError();
  getCustomError = () => this.users$ = this.userService.getCustomError();
  getEmpty = () => this.users$ = this.userService.getEmpty();
  getNull = () => this.users$ = this.userService.getNull();
}
