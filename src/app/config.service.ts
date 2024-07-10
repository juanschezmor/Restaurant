import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private fontSizeSource = new BehaviorSubject<string>('Mediano');
  currentFontSize = this.fontSizeSource.asObservable();

  setFontSize(fontSize: string) {
    this.fontSizeSource.next(fontSize);
  }
}
