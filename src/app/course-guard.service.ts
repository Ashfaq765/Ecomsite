import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot, Router } from "@angular/router";
import { AuthService } from "./auth.service";


@Injectable()
export class CourseGuardService implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.IsAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['']);
            return false
        }
    }
}