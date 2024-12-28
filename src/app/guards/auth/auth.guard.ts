import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userServices = inject(UserService)
  const router = inject(Router)

  let loggedIn = false;

  userServices.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
    loggedIn = isLoggedIn
    if (loggedIn) {
      return true
    }
    else {
      router.navigateByUrl('/login')
      return false
    }
  })
  return loggedIn;
};

