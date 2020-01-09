import { Pipe, PipeTransform }        from '@angular/core';
import { of }                         from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';

/*
 By Alexey Zuev:
 https://medium.com/angular-in-depth/angular-show-loading-indicator-when-obs-async-is-not-yet-resolved-9d8e5497dd8
 */
@Pipe({
  name: 'withLoading'
})
export class WithLoadingPipe implements PipeTransform {
  transform(val, trigger?) {
    return val ? val.pipe(
      map(response => ({isLoading: false, response})),
      startWith({isLoading: true}),
      catchError(err => of({isLoading: false, err}))
    ) : null;
  }
}
