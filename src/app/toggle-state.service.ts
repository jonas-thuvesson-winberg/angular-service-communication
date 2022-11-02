import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ToggleStateService {
  public get isOn$(): Observable<boolean> {
    return this._IsOn$;
  }
  private _IsOn$ = new Subject<boolean>();

  public broadcastToggleState(isOn: boolean): void {
    this._IsOn$.next(isOn);
  }
}
