import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Observable, throwError }                                                     from 'rxjs';
import { catchError, tap }                                                            from 'rxjs/operators';

@Component({
  selector: 'app-stream-wrapper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stream-wrapper.component.html'
})
export class StreamWrapperComponent<T = any> implements OnChanges {

  @Input() stream$: Observable<T>;
  @Output() response = new EventEmitter<T>();

  public data: T;

  ngOnChanges() {
    this.stream$ = this.getUpdatedStream(this.stream$);
  }

  getUpdatedStream(stream$: Observable<T>) {
    return stream$.pipe(
      tap(res => this.setValue(res)),
      catchError(res => {
        this.setValue(null);
        return throwError(res);
      }));
  }

  private setValue(value: T) {
    this.data = value;
    this.response.emit(value);
  }
}

