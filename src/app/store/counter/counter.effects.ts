import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';
import { SnackbarService } from '../../shared/snackbar.service';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions, private snackbar: SnackbarService) {}

  showSnackbar$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[Counter] Reset'),
        map(() => {
          this.snackbar.openSnackBar('Your counter has been reset.');
          return EMPTY;
        })
      ),
    { dispatch: false }
  );
}
