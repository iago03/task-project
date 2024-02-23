import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-casino',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './casino.component.html',
})
export class CasinoComponent {}
