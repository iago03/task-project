import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarItem } from 'src/app/shared/const/side-bar-items';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/shared/const/lang.const';
@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  sidebarItems = SideBarItem;
  languageArray = Language;
  currentLanguage = 'ge';

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('ge');
  }

  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }
}
