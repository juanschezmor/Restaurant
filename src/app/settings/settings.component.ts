import { Component } from '@angular/core';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  constructor(private configService: ConfigService) {}

  fontSizeOptions: string[] = ['Pequeño', 'Mediano', 'Grande'];
  selectedFontSize: string = 'Mediano';

  guardarCambios() {
    console.log('Cambios guardados:', this.selectedFontSize);
    this.configService.setFontSize(this.selectedFontSize);
  }
}
