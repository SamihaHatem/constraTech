import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserI } from 'src/app/interfaces/user';
import { loginAction, logoutAction } from 'src/app/store/actions/user.action';
import { baseUrl } from 'src/baseUrl';
import Swal from 'sweetalert2';

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
    console.log('api login')
    this.http.post(baseUrl.apiUrl + 'users/login', user).subscribe((response: any) => {
      console.log(response)
      let loggedin_user: UserI = { username: response.username, _id: response._id, email: response.email, isLoggedIn: true, token: response.token }
      this.store.dispatch(loginAction({ user: loggedin_user }));
      this.setIsLoggedIn()
    }, (err) => {
      console.log(err)
      Swal.fire({
        title: 'Login Failed',
        icon: 'error'
      })
    })
  }

  logout(): void {
    this.store.dispatch(logoutAction());
    localStorage.removeItem('constraTechAdminUser')
  }

  register(reqBody: any) {
    return this.http.post(baseUrl.apiUrl + 'users/register', reqBody)
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
