import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private snackBar:MatSnackBar,private router:Router) { }
  
  authError() {
    this.snackBar.open('You must be logged in to access this page', 'close', { duration: 5000 });
    if (this.snackBar._openedSnackBarRef) {
      return this.snackBar._openedSnackBarRef
        .onAction()
        .pipe(
          tap(() => {
            this.router.navigate(['/login']);
          })
        )
        .subscribe();
    }
    return of();
  }
}
