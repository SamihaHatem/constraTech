import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

export const redirectGuard: CanActivateFn = (route, state) => {
  const userServices = inject(UserService)
  const router = inject(Router)

  let loggedIn = false;

  userServices.isLoggedIn$.subscribe((isLoggedIn: boolean) => {
    loggedIn = isLoggedIn
    if (loggedIn) {
      router.navigateByUrl('admin/home')
      return false
    }
    else {
      return true
    }
  })
  return !loggedIn;
};

