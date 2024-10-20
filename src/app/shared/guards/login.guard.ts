import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const _authS = inject(AuthService);
  const _router = inject(Router);
  if(_authS.isAuthanticated())
  {
    _router.navigate(['/home'])
    return false;
  }
  else
  {
    return true
  }
};
