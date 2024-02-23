import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sport',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './sport.component.html',
})
export class SportComponent {}
