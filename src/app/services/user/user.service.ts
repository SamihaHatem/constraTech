import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserI } from 'src/app/interfaces/user';
import { loginAction, logoutAction } from 'src/app/store/actions/user.action';
import { baseUrl } from 'src/baseUrl';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user$!: Observable<UserI>;
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient, private store: Store<{ user: UserI }>) {
    this.user$ = this.store.pipe(select('user'));
    this.user$.subscribe((data: any) => {
      this.isLoggedInSubject.next(data.isLoggedIn);
    })
  }

  login(user: { username: string, password: string }) {
    this.store.dispatch(loginAction({ user }));
    this.setIsLoggedIn()
  }

  logout(): void {
    this.store.dispatch(logoutAction());
    localStorage.removeItem('constraTechAdminUser')
  }

  register(reqBody: any) {
    return this.http.post(baseUrl.apiUrl + '/users/register', reqBody)
  }

  setIsLoggedIn() {
    this.user$ = this.store.pipe(select('user'));
    this.user$.subscribe((data: any) => {
      console.log("$$$-> ", data)

      this.isLoggedInSubject.next(data.isLoggedIn);
      localStorage.setItem('constraTechAdminUser', JSON.stringify(data));
    })
  }

}
