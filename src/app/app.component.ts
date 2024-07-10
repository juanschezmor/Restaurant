import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RestFesac-Angular';
  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.configService.currentFontSize.subscribe((fontSizeCategory) => {
      const fontSizeInPixels = this.mapFontSizeToPixels(fontSizeCategory);

      document.body.style.fontSize = fontSizeInPixels;
    });
  }

  private mapFontSizeToPixels(fontSizeCategory: string): string {
    switch (fontSizeCategory) {
      case 'Pequeño':
        return '12px';
      case 'Mediano':
        return '16px';
      case 'Grande':
        return '20px';
      default:
        return '16px';
    }
  }
}
