import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingScreenService {

  private loadinge = false;
  loadingStatus = new Subject();

  get loading(): boolean {
    return this.loadinge;
  }

  set loading(value) {
    this.loadinge = value;
    this.loadingStatus.next(value);
  }

  startLoading() {
    this.loading = true;
  }

  stopLoading() {
    this.loading = false;
  }
}
