import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {

        // not use right now, use it to redirect after user login
        let url: string = state.url;
        console.log('AuthGuard canActivate');
        console.log(route.data);
        const isLoggedIn = route.data.isLoggedIn || false;

        if (!isLoggedIn) {
            this.router.navigate(['/login']);
        }
        return isLoggedIn;
    }
}