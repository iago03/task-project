import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './live.component.html',
})
export class LiveComponent {}
